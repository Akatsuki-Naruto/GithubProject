import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Card from "./Card";
import { useState } from "react";
import clsx from "clsx";

export function DragCard() {
  const [card, setCard] = useState([
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
    { id: 6, name: "f" },
    { id: 7, name: "g" },
    { id: 8, name: "h" },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    // console.log("active", active.id);
    // console.log("over", over.id);

    if (!active.id !== over.id) {
      setCard((card) => {
        const oldIndex = card.findIndex((tag) => tag.id === active.id);
        const newIndex = card.findIndex((tag) => tag.id === over.id);

        // console.log(arrayMove(card, oldIndex, newIndex));
        return arrayMove(card, oldIndex, newIndex);
      });
    }

    // console.log("drag end");
  };

  return (
    <>
      <div className={clsx(" relative flex h-[400px]")}>
        <div className={clsx("flex flex-col max-w-[270px] overflow-x-hidden scrollbar-hide")}>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            {/* <h1 className={clsx("text-2xl font-bold")}>Backlog</h1> */}
            <SortableContext
              items={card}
              strategy={verticalListSortingStrategy}
            >
              {card.map((user) => (
                <Card key={user.id} user={user} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </>
  );
}
