import React, { useEffect, useState } from "react";
import { api } from "./api";
import Element from "../components/Table/Element";
import clsx from "clsx";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";

export function CallApi() {
  const [elements, setElements] = useState([]);
  const [Title, setTitle] = useState("");
  const [Assignees, setAssignees] = useState("");
  const [Priority, setPriority] = useState("");
  const [Status, setStatus] = useState("");
  const [Size, setSize] = useState("");
  const [LinkedPullRequest, setLinkedPullRequest] = useState("");
  const [Labels, setLabels] = useState("");

  useEffect(() => {
    const fetchElement = async () => {
      const response = await api.get("");
      setElements(response.data);
    };
    fetchElement();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active.id !== over.id) {
      setElements((elements) => {
        const oldIndex = elements.findIndex((use) => use.id === active.id);
        const newIndex = elements.findIndex((use) => use.id === over.id);

        return arrayMove(elements, oldIndex, newIndex);
      });
    }
  };

  const addElements = async (
    Title,
    Assignees,
    Priority,
    Status,
    Size,
    LinkedPullRequest,
    Labels
  ) => {
    const response = await api.post("", {
      Title: Title,
      Assignees: Assignees,
      Priority: Priority,
      Status: Status,
      Size: Size,
      LinkedPullRequest: LinkedPullRequest,
      Labels: Labels,
    });
    setElements([response.data, ...elements]);
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
    addElements(
      Title,
      Assignees,
      Priority,
      Status,
      Size,
      LinkedPullRequest,
      Labels
      );
    };
    
    useEffect(()=>{
      
    });

  const deleteElements = async (id) => {
    await api.delete(`${id}`);
    setElements(
      elements.filter((Element) => {
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
            items={elements}
            strategy={verticalListSortingStrategy}
          >
            {elements.map((user) => (
              <Element
                key={user.id}
                user={user}
                Title={user.Title}
                Assignees={user.Assignees}
                Priority={user.Priority}
                Status={user.Status}
                Size={user.Size}
                LinkedPullRequest={user.LinkedPullRequest}
                Labels={user.Labels}
                deleteElements={deleteElements}
              />
            ))}
          <form onSubmit={handleSubmit}>
              {/* <div className={clsx("sticky bottom-0 left-5 right-5")}> */}
                <input
                  className={clsx("pl-4 border-[1px] bg-primary-3 text-white border-black w-full h-12 focus:border-blue-700 focus:border-[1px] sticky bottom-0 left-5 right-5")}
                  type="text"
                  value={Title}
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
