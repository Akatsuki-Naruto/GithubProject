import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import { Backlog } from "./Backlog/Backlog";
import { Table } from "./Table/Tables";
import { BacklogTest } from "./ApiBacklog/Backlog";
import Search from "./search";
import Dropdown from "./dropdown";
import MyModal from "./dialog(Model)";
import Switches from "./switch(Toggle)";
import { DropDown } from "../assets/svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Menu() {
  let [categories] = useState({
    Board: [
      {
        id: 1,
        content: <Backlog />,
      },
    ],
    Table: [
      {
        id: 1,
        content: <Table />,
      },
      {
        id: 2,
      },
    ],
    BoardTest: [
      {
        id: 1,
        content: <BacklogTest />,
      },
    ],
    Drop_Down: [
      {
        id: 1,
        content: <Dropdown />,
      },
    ],
    Dialog: [
      {
        id: 1,
        content: <MyModal />,
      },
    ],
    Switch: [
      {
        id: 1,
        content: <Switches />,
      },
    ],
  });

  return (
    <div className={clsx("w-full max-w-md px-2 py-16 sm:px-0 relative")}>
      <Tab.Group>
        <Tab.List
          className={clsx(
            "flex space-x-1 rounded-t-md bg-primary-1 fixed top-11 left-4 w-80 h-9"
          )}
        >
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  clsx(
                    " w-full rounded-t-md px-3 text-sm font-normal leading-5 text-primary-9 "
                  ),
                  clsx("focus:outline-none"),
                  selected
                    ? clsx(
                        "bg-primary-3 shadow  border-t-[1px] border-t-primary-9  border-r-[1px] border-r-primary-9 border-l-[1px] border-l-primary-9 "
                      )
                    : clsx("text-blue-100 hover:text-white")
                )
              }
            >
              {category}
              {/* <Dropdown/> */}
            </Tab>
          ))}
        </Tab.List>
        <Search />
        <div className={clsx("")}>
          <Tab.Panels className="mt-2 fixed top-32 left-0 right-0 bottom-0 overflow-scroll bg-primary-3 ">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  clsx("rounded-xl bg-primary-3 text-black"),
                  clsx("focus:outline-none")
                )}
              >
                <ul className={clsx("focus:border-primary-3")}>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className={clsx("relative rounded-md pt-3")}
                    >
                      <div className={clsx("relative z-10")}>
                        {post.content}
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
