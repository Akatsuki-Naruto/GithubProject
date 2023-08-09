import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { MoreOptions } from "../../assets/svg";

function TitleColumn({ user }) {
  const {setNodeRef } = useSortable({ id: user.id });


  return (
    <>
      <div
        ref={setNodeRef}
        className={clsx(
          `bg-primary-1 p-4 h-[50px] shadow-md  text-white ${user.width} border-r-white border-r-[1px] focus:z-20`
        )}
      >
        <div className={clsx("flex justify-between")}>
          <h1>{user.name}</h1>
          <MoreOptions />
        </div>
      </div>
    </>
  );
}

export default TitleColumn;
