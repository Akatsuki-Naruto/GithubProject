import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import { Backlog } from "./Backlog/Backlog";
import { Table } from "./Table/Tables";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Menu() {
  let [categories] = useState({
    Board: [
      {
        id: 1,
        content:<Backlog/>
      },
    ],
    Table: [
      {
        id: 1,
        content:<Table/>
      },
      {
        id: 2,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className={clsx("w-full max-w-md px-2 py-16 sm:px-0 relative")}>
      <Tab.Group>
        <Tab.List
          className={clsx("flex space-x-1 rounded-xl bg-blue-900/20 p-1")}
        >
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  clsx(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700"
                  ),
                  clsx(
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  ),
                  selected
                    ? clsx("bg-white shadow")
                    : clsx(
                        "text-blue-100 hover:bg-white/[0.12] hover:text-black"
                      )
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                clsx("rounded-xl bg-white p-3 text-black"),
                clsx(
                  "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
                )
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className={clsx(
                      "relative rounded-md p-3 hover:bg-gray-100"
                    )}
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
      </Tab.Group>
    </div>
  );
}
