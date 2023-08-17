import React, { useEffect, useState } from "react";


import clsx from "clsx";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { api } from "../api";
import Element from "../../components/Table/Element";

export function CallMedium() {
  const [elements, setElements] = useState([]);
  const [Title, setTitle] = useState("");
  const [Assignees, setAssignees] = useState("");
  const [Priority, setPriority] = useState("Medium");
  const [Status, setStatus] = useState("");
  const [Size, setSize] = useState("");
  const [LinkedPullRequest, setLinkedPullRequest] = useState("");
  const [Labels, setLabels] = useState("");
  const [isActive, setIsActive] = useState(true);
  const row = clsx(
    "pl-4 border-[1px] bg-primary-3 text-white border-black left-0 right-0 absolute h-12 focus:border-blue-700 focus:border-[1px] "
  );
  const elem = clsx(
    "fixed bottom-[18px] left-3 right-[18px] pl-4 border-[1px] bg-primary-6 rounded-md text-white border-primary-9 h-12 focus:border-blue-700 focus:border-[1px] z-30"
  );

  useEffect(() => {
    const fetchElement = async () => {
      const response = await api.get(`?Priority=Medium`);
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
      // window.onresize()
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
    )
  };
  const deleteElements = async (id) => {
    await api.delete(`${id}`);
    setElements(
      elements.filter((Element) => {
        return Element.id !== id;
      })
    );
  };

  useEffect(() => {
    const form = document.querySelector("form");
    const rect = form.getBoundingClientRect();
    if (rect.top >= window.innerHeight) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  });

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
                className={isActive ? row : elem}
                type="text"
                value={Title}
                placeholder="Add an Item..."
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* </div> */}
            </form>
            <div
              className={clsx(
                "bg-primary-3 mr-4 border-t-[2px] border-t-primary-4 border-b-[1px] border-b-primary-4 text-white focus:z-20"
              )}
            ></div>
          </SortableContext>
        </DndContext>
        {/* {alert && <h3>Updated API</h3>} */}
      </div>
    </>
  );
}
