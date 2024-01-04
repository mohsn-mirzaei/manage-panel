import classNames from "classnames";

const linkColor = (linkHref: string, currentPath: string) =>
  classNames({
    "bg-gray-100": linkHref === currentPath,
    "": linkHref !== currentPath,
    "hover:hover:bg-gray-50 text transition-colors": true,
    "flex gap-2 items-center w-full rounded p-2": true,
  });

export { linkColor };
