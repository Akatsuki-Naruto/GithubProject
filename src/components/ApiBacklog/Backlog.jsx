import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Status from "./Status";
import clsx from "clsx";

export function BacklogTest() {
  const [status, setStatus] = useState([
    { id: 100, name: "🆕 New" , infor:'New'},
    { id: 200, name: "📋 Backlog",infor:'Backlog' },
    { id: 300, name: "🔖 Ready" ,infor:'Ready'},
    { id: 400, name: "🏗 In Progress" , infor:'In Progress'},
    { id: 500, name: "👀 In review",infor:'In Review'},
    { id: 600, name: "✅ Done" ,infor:'Done'},
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // console.log("active", active.id);
    // console.log("over", over.id);

    if (!active.id !== over.id) {
      setStatus((status) => {
        const oldIndex = status.findIndex((stat) => stat.id === active.id);
        const newIndex = status.findIndex((stat) => stat.id === over.id);

        // console.log(arrayMove(status, oldIndex, newIndex));
        return arrayMove(status, oldIndex, newIndex);
      });
    }

    // console.log("drag end");
  };

  return (
    <>
      <div className={clsx("flex justify-start items-center px-8 overflow-x-hidden")}>
        <div className={clsx("flex flex-row")}>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            {/* <h1 className={clsx("text-2xl font-bold")}>Backlog</h1> */}
            <SortableContext
              items={status}
              strategy={verticalListSortingStrategy}
            >
              {status.map((user) => (
                <Status key={user.id} user={user} />
              ))}
              
            </SortableContext>
          </DndContext>
          
        </div>
      </div>
    </>
  );
}
