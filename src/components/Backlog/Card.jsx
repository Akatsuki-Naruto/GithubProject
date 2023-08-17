import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";

function Card({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: user.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={clsx(
        "bg-primary-2 mr-4 p-4 rounded-md shadow-md my-[2px] text-white w-[240px] flex justify-between hover:opacity-50"
      )}
    >
      <h1>{user.Title}</h1>
    </div>
  );
}

export default Card;
