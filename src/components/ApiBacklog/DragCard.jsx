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
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchElement = async () => {
      const response = await sta.get("");
      setCard(response.data);
    };
    fetchElement();
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active.id !== over.id) {
      setCard((card) => {
        const oldIndex = card.findIndex((tag) => tag.id === active.id);
        const newIndex = card.findIndex((tag) => tag.id === over.id);
        return arrayMove(card, oldIndex, newIndex);
      });
    }
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
