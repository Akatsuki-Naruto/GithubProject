import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { MoreOptions } from "../../assets/svg";
import { useState } from "react";
import { CallApiBoard } from "../../Api/callApiStatus";
import { api } from "../../Api/api";

function Status({ user }) {
  const [element, setElement] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(`${user.infor}`);

  
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const addElement = async (
    title,
    status,

  ) => {
    const response = await api.post("", {
      title: title,
      status: status,
    });
    setElement([response.data, ...element]);
    setStatus(`${user.infor}`);
    setTitle("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addElement(
      title,
      status,
    );
  };

  const deleteElements = async (id) => {
    await api.delete(`${id}`);
    setElement(
      element.filter((Element) => {
        return Element.id !== id;
      })
    );
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
            "bg-primary-1 mr-2 pt-4 pr-4 pl-4 rounded-t-md h-[450px] shadow-md mt-2 text-white w-[300px] focus:z-20"
          )}
        >
          <div className={clsx("flex justify-between")}>
            <h1>{user.name}</h1>
            <MoreOptions />
          </div>

          <CallApiBoard user={user} status={user.infor} />
        </div>
        <form onSubmit={handleSubmit} className={clsx("w-[300px] bg-primary-1 pb-2 rounded-b-lg")}>
          <input
            className={clsx(
              " ml-4 px-2 h-7 w-[270px] bg-gray-300 text-black focus:outline-none border-[1px] border-primary-1"
            )}
            type="text"
            value={title}
            placeholder="Add card"
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

export default Status;
