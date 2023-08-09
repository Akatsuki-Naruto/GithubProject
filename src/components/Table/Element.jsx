import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";

function Element({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div className={clsx("")}>
        <div
          style={style}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          className={clsx(
            "bg-primary-1 mr-4 rounded-md shadow-md border-t-[2px] border-t-white border-b-[2px] border-b-white text-white focus:z-20 flex flex-row items-center"
          )}
        >
            <div className={clsx(" pl-2 w-[500px] bg-black border-r-white border-r-[1px] h-10")}>{user.Title}</div>
            <div className={clsx("pl-2 w-[250px] bg-black border-r-white border-r-[1px] h-10")}>{user.Assignees}</div>
            <div className={clsx("pl-2 w-[250px] bg-black border-r-white border-r-[1px] h-10")}>{user.Priority}</div>
            <div className={clsx("pl-2 w-[250px] bg-black border-r-white border-r-[1px] h-10")}>{user.Status}</div>
            <div className={clsx("pl-2 w-[250px] bg-black border-r-white border-r-[1px] h-10")}>{user.Size}</div>
            <div className={clsx("pl-2 w-[300px] bg-black border-r-white border-r-[1px] h-10")}>{user.LinkedPullRequest}</div>
            <div className={clsx("pl-2 w-[250px] bg-black border-r-white border-r-[1px] h-10")}>{user.Labels}</div>
        </div>
      </div>
    </>
  );
}

export default Element;
