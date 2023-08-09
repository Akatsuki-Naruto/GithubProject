import React, { useEffect, useState } from "react";
import { api } from "./api";
import Element from "../components/Table/Element";
import clsx from "clsx";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";

export function CallApi() {
  const [Elements, setElements] = useState([]);
  const [User, setUser] = useState([
    {
      id: 1,
      Title: "12",
      Assignees: "Akatsuki-Naruto",
      Priority: "Urgent ",
      Status: "New",
      Size: "Medium",
      LinkedPullRequest: "nguyenb@gmail.com",
      Labels: "Documentation",
    },
    {
      id: 2,
      Title: "13",
      Assignees: "Akatsuki-Naruto",
      Priority: "Urgent ",
      Status: "New",
      Size: "Medium",
      LinkedPullRequest: "nguyenb@gmail.com",
      Labels: "Documentation",
    },
    {
      id: 3,
      Title: "14",
      Assignees: "Akatsuki-Naruto",
      Priority: "Urgent ",
      Status: "New",
      Size: "Medium",
      LinkedPullRequest: "nguyenb@gmail.com",
      Labels: "Documentation",
    },
    {
      id: 4,
      Title: "15",
      Assignees: "Akatsuki-Naruto",
      Priority: "Urgent ",
      Status: "New",
      Size: "Medium",
      LinkedPullRequest: "nguyenb@gmail.com",
      Labels: "Documentation",
    },
    {
      id: 5,
      Title: "16",
      Assignees: "Akatsuki-Naruto",
      Priority: "Urgent ",
      Status: "New",
      Size: "Medium",
      LinkedPullRequest: "nguyenb@gmail.com",
      Labels: "Documentation",
    },
    {
      id: 6,
      Title: "17",
      Assignees: "Akatsuki-Naruto",
      Priority: "Urgent ",
      Status: "New",
      Size: "Medium",
      LinkedPullRequest: "nguyenb@gmail.com",
      Labels: "Documentation",
    },
  ]);

//   const fetchElement = async () => {
//     const response = await api.get("User");
//     setElements(response.data);
//   };

//   useEffect(() => {
//     fetchElement();
//   }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!active.id !== over.id) {
      setUser((User) => {
        const oldIndex = User.findIndex((use) => use.id === active.id);
        const newIndex = User.findIndex((use) => use.id === over.id);

        return arrayMove(User, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <div>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          {/* <h1 className={clsx("text-2xl font-bold")}>Backlog</h1> */}
          <SortableContext
            items={User}
            strategy={verticalListSortingStrategy}
          >
            {User.map((user) => (
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
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
}
