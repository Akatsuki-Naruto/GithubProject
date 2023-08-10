import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { Garbage } from "../../assets/svg";

function Element({ user, deleteElements }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div className={clsx("flex flex-row")}>
        <div
          style={style}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          className={clsx(
            "bg-primary-3 mr-4 rounded-md shadow-md border-t-[2px] border-t-primary-4 border-b-[1px] border-b-primary-4 text-white focus:z-20 flex flex-row items-center justify-center"
          )}
        >
          <div
            className={clsx(
              " pl-5 w-[50px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.id}
          </div>
          <div
            className={clsx(
              " pl-5 w-[250px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.Title}
          </div>
          <div
            className={clsx(
              " pl-5 w-[250px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.Assignees}
          </div>
          <div
            className={clsx(
              " pl-5 w-[200px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.Priority}
          </div>
          <div
            className={clsx(
              " pl-5 w-[200px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.Status}
          </div>
          <div
            className={clsx(
              " pl-5 w-[200px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.Size}
          </div>
          <div
            className={clsx(
              " pl-5 w-[250px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.LinkedPullRequest}
          </div>
          <div
            className={clsx(
              " pl-5 w-[200px] bg-primary-3 border-r-primary-4 border-r-[1px] h-10 flex items-center"
            )}
          >
            {user.Labels}
          </div>
        </div>
        <span
          className={clsx("")}
          onClick={(e) => {
            deleteElements(user.id);
          }}
        >
          <Garbage />
        </span>
      </div>
    </>
  );
}

export default Element;
