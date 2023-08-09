import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import clsx from "clsx";
import TitleColumn from "./TitleColumn";
import { CallApi } from "../../Api/callApi";

export function Table() {
  const title = [
    { id: 1, name: "Title", width: "w-[500px]" },
    { id: 2, name: "Assignees", width: "w-[250px]" },
    { id: 3, name: "Priority", width: "w-[250px]" },
    { id: 4, name: "Status", width: "w-[250px]" },
    { id: 5, name: "Size", width: "w-[250px]" },
    { id: 6, name: "Linked pull requests", width: "w-[300px]" },
    { id: 7, name: "Labels", width: "w-[250px]" },
  ];

  return (
    <>
      <div className={clsx("flex justify-start items-center px-8")}>
        <div className={clsx("flex flex-col")}>
          <div className={clsx("flex flex-row")}>
            {title.map((user) => (
              <TitleColumn key={user.id} user={user} width={user.width} />
            ))}
          </div>
          <div className={clsx("flex flex-col")}>
            <CallApi />
          </div>
        </div>
      </div>
    </>
  );
}
