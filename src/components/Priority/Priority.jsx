import clsx from "clsx";
import React, { useState } from "react";
import { CallPriority } from "../../Api/callPriority";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { MoreOptions } from "../../assets/svg";
import { CallUrgent } from "../../Api/Priority/urgent";
import { CallHigh } from "../../Api/Priority/high";
import { CallMedium } from "../../Api/Priority/medium";
import { CallLow } from "../../Api/Priority/Low";
import { CallNoPriority } from "../../Api/Priority/noPriority";
import TitleColumn from "../Table/TitleColumn";

export function Priority() {
  const title = [
    { id: 1, name: "Title", width: "w-[300px]", padding: "pl-[55px]" },
    { id: 2, name: "Assignees", width: "w-[250px]" },
    { id: 3, name: "Priority", width: "w-[200px]" },
    { id: 4, name: "Status", width: "w-[200px]" },
    { id: 5, name: "Size", width: "w-[200px]" },
    { id: 6, name: "Linked pull requests", width: "w-[250px]" },
    { id: 7, name: "Labels", width: "w-[200px]" },
  ];

  return (
    <>
      <div
        className={clsx(
          "flex justify-start items-center sticky left-0 border-t-[1px] border-t-primary-4 top-0 z-40 border-b-4 border-b-primary-4"
        )}
      >
        <div className={clsx("flex flex-row")}>
          {title.map((user) => (
            <TitleColumn key={user.id} user={user} width={user.width} />
          ))}
        </div>
      </div>

      <div className={clsx("flex justify-start items-center text-white pb-16")}>
        <div className={clsx("flex flex-col")}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx("flex flex-row items-center justify-between pb-2")}
                >
                  <span className={clsx(" bg-primary-")}>Urgent</span>
                  <ChevronUpIcon
                    className={clsx(`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`)}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <CallUrgent />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className={clsx("flex justify-start items-center text-white pb-16")}>
        <div className={clsx("flex flex-col")}>
        <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx("flex flex-row items-center justify-between pb-2")}
                >
                  <span>High</span>
                  <ChevronUpIcon
                    className={clsx(`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`)}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <CallHigh />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className={clsx("flex justify-start items-center text-white pb-16")}>
        <div className={clsx("flex flex-col")}>
        <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx("flex flex-row items-center justify-between pb-2")}
                >
                  <span>Medium</span>
                  <ChevronUpIcon
                    className={clsx(`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`)}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <CallMedium />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className={clsx("flex justify-start items-center text-white pb-16")}>
        <div className={clsx("flex flex-col")}>
        <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx("flex flex-row items-center justify-between pb-2")}
                >
                  <span>Low</span>
                  <ChevronUpIcon
                    className={clsx(`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`)}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <CallLow />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className={clsx("flex justify-start items-center text-white pb-16")}>
        <div className={clsx("flex flex-col")}>
        <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx("flex flex-row items-center justify-between pb-2")}
                >
                  <span>No Priority</span>
                  <ChevronUpIcon
                    className={clsx(`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`)}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <CallNoPriority />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}
