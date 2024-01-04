import classNames from "classnames";
import React from "react";

interface Props {
  content: string;
  align: "right" | "left";
}

const MessageBox = ({ content, align }: Props) => {
  return (
    <div
      className={classNames({
        flex: true,
        "justify-end": align === "left",
      })}
    >
      <div
        className={classNames({
          "bg-orange-200 rounded-br-[0]": align === "right",
          "bg-gray-50 rounded-bl-[0]": align === "left",
          "flex flex-col h-full justify-between shadow w-fit max-w-[66%] rounded-2xl p-3":
            true,
        })}
      >
        <p className="font-normal text-gray-700 dark:text-gray-400 text-xs md:text-sm">
          {content}
        </p>
      </div>
    </div>
  );
};

export default MessageBox;
