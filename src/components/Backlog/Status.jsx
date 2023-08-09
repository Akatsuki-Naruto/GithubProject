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
      <div className={clsx("flex flex-col")}>
        <div
          style={style}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          className={clsx(
            "bg-primary-1 mr-4 p-4 rounded-md h-[450px] shadow-md my-2 text-white w-[300px] focus:z-20"
          )}
        >
          <div className={clsx("flex justify-between")}>
            <h1>{user.name}</h1>
            <MoreOptions />
          </div>

          <DragCard />
        </div>

        <input
          className={clsx(
            " ml-4 px-2 h-7 w-[270px] bg-gray-300 text-black focus:outline-none border-[1px] border-primary-1"
          )}
          placeholder="Add card"
        />
      </div>
    </>
  );
}

export default Status;
