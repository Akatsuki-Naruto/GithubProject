import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export default function Search() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className={clsx("fixed left-0 py-3 top-20 right-0 focus:z-20 bg-primary-3 flex flex-row h-14  border-t-[1px] border-t-primary-9")}>
      <Combobox value={selected} onChange={setSelected}>
        <div className={clsx("absolute right-[144px] left-1 mt-1 ")}>
          <div className={clsx("relative w-full overflow-hidden rounded-lg bg-primary-3 text-left shadow-md sm:text-sm")}>
            <Combobox.Input
              className={clsx("w-full border-primary-9 border-[1px] rounded-lg py-2 pl-3 pr-10 text-sm  text-white focus:border-[1px] focus:border-blue-500 bg-primary-3")}
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className={clsx("absolute inset-y-0 right-0 flex items-center pr-2")}>
              <ChevronUpDownIcon
                className={clsx("h-5 w-5 text-gray-400")}
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className={clsx("absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary-3 py-1 text-base shadow-lg focus:outline-none sm:text-sm")}>
              {filteredPeople.length === 0 && query !== "" ? (
                <div className={clsx("relative cursor-default select-none py-2 px-4 text-white")}>
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      clsx(`relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary-3 text-white" : "text-gray-900"
                      }`)
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={clsx(`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`)}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={clsx(`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`)}
                          >
                            <CheckIcon className={clsx("h-5 w-5")} aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <div className={clsx("absolute right-1 flex -flex-row")}>
        <button
          className={clsx(
            "m-[6px] ml-3 flex items-center justify-center rounded-lg border-[1px] border-primary-7 w-16 h-8 text-white text-sm hover:bg-primary-6 bg-primary-8 hover:border-primary-9"
          )}
        >
          discard
        </button>
        <button
          className={clsx(
            "m-[6px] flex items-center justify-center rounded-lg text-sm border-[1px] border-primary-7 w-12 h-8 text-primary-5 hover:bg-primary-6 bg-primary-8"
          )}
        >
          Save
        </button>
      </div>
    </div>
  );
}
