import React, { useEffect, useState } from "react";
import { api, sta } from "./api";
import Element from "../components/Table/Element";
import clsx from "clsx";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";

export function CallApi() {
  const [element, setElement] = useState([]);
  const [title, setTitle] = useState("");
  const [assignees, setAssignees] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [size, setSize] = useState("");
  const [linkedPullRequest, setLinkedPullRequest] = useState("");
  const [labels, setLabels] = useState("");

  useEffect(() => {
    const fetchElement = async () => {
      const response = await sta.get("");
      setElement(response.data);
    };
    fetchElement();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active.id !== over.id) {
      setElement((element) => {
        const oldIndex = element.findIndex((use) => use.id === active.id);
        const newIndex = element.findIndex((use) => use.id === over.id);

        return arrayMove(element, oldIndex, newIndex);
      });
    }
  };

  const addElement = async (
    title,
    assignees,
    priority,
    status,
    size,
    linkedPullRequest,
    labels
  ) => {
    const response = await api.post("", {
      title: title,
      assignees: assignees,
      priority: priority,
      status: status,
      size: size,
      linkedPullRequest: linkedPullRequest,
      labels: labels,
    });
    setElement([response.data, ...element]);
    setAssignees("");
    setLabels("");
    setLinkedPullRequest("");
    setPriority("");
    setSize("");
    setStatus("");
    setTitle("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addElement(
      title,
      assignees,
      priority,
      status,
      size,
      linkedPullRequest,
      labels
    );
  };

  const deleteElements = async (id) => {
    await api.delete(`${id}`);
    setElement(
      element.filter((Element) => {
        return Element.id !== id;
      })
    );
  };

  return (
    <>
      <div>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          {/* <h1 className={clsx("text-2xl font-bold")}>Backlog</h1> */}
          <SortableContext
            items={element}
            strategy={verticalListSortingStrategy}
          >
            {element.map((user) => (
              <Element
                key={user.id}
                user={user}
                title={user.title}
                assignees={user.assignees}
                priority={user.priority}
                status={user.status}
                size={user.size}
                linkedPullRequest={user.linkedPullRequest}
                labels={user.labels}
                deleteElements={deleteElements}
              />
            ))}
            <form onSubmit={handleSubmit}>
              {/* <div className={clsx("sticky bottom-0 left-5 right-5")}> */}
              <input
                className={clsx(
                  "pl-4 border-[1px] bg-primary-3 text-white border-black w-full h-12 focus:border-blue-700 focus:border-[1px] sticky bottom-0 left-5 right-5"
                )}
                type="text"
                value={title}
                placeholder="Add an Item..."
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* </div> */}
            </form>
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
}
