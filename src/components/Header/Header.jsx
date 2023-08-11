import React from "react";
import {
  DescriptionPanel,
  MoreOptions,
  NavigateToInsight,
} from "../../assets/svg";
import clsx from "clsx";

export function Header() {
  return (
    <>
      <a
        href="/index.html"
        className={clsx("fixed top-3 text-white left-3 text-lg z-30")}
      >
        @Akatsuki-Naruto's project
      </a>

      <div
        className={clsx(
          "fixed top-5 right-5 bg-primary-7 flex flex-row rounded-md"
        )}
      >
        <button
          className={clsx(
            "w-[30px] h-[30px] flex items-center justify-center border-[1px] border-primary-9 rounded-l-md hover:border-[1px] hover:border-primary-10 hover:bg-primary-11"
          )}
        >
          <NavigateToInsight />
        </button>
        <button
          className={clsx(
            "w-[30px] h-[30px] flex items-center justify-center border-y-[1px] border-y-primary-9 hover:border-[1px] hover:border-primary-10 hover:bg-primary-11"
          )}
        >
          <DescriptionPanel />
        </button>
        <button
          className={clsx(
            "w-[30px] h-[30px] flex items-center justify-center border-[1px] border-primary-9 rounded-r-md hover:border-[1px] hover:border-primary-10 hover:bg-primary-11"
          )}
        >
          <MoreOptions />
        </button>
      </div>
    </>
  );
}
