import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { MoreOptions } from "../../assets/svg";
import { useState } from "react";
import { DragCard } from "./DragCard";

function Status({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className={clsx(
          "bg-primary-1 mr-4 p-4 rounded-md shadow-md my-2 text-white w-[300px] "
        )}
      >
        <div className={clsx("flex justify-between")}>
          <h1>{user.name}</h1>
          <MoreOptions />
        </div>

        <DragCard />
      </div>
    </>
  );
}

export default Status;
