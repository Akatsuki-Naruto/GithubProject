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
import Card from "../components/Backlog/Card";

export function CallApiBoard(user) {
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
      const response = await api.get(`?Status=${user.status}`);
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
    if (element.idStatus === status.id) {
      return element;
    } else {
      undefined;
    }
  };

  return (
    <>
      <div className={clsx(" relative flex h-[400px] overflow-x-hidden")}>
        <div
          className={clsx(
            "flex flex-col overflow-x-clip"
          )}
        >
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={element}
              strategy={verticalListSortingStrategy}
            >
              {element.map((user) => (
                <Card
                  key={user.id}
                  user={user}
                  Title={user.Title}
                  // assignees={user.infor.value.login}
                  // priority={user.priority}
                  // status={user.infor.value.id}
                  // size={user.size}
                  // linkedPullRequest={user.linkedPullRequest}
                  // labels={user.labels}
                  // deleteElements={deleteElements}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </>
  );
}
