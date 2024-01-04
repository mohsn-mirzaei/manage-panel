import React from "react";

const NotFindPage = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center h-1/2">
      <p className="text-sm text-gray-700">{title}</p>
    </div>
  );
};

export default NotFindPage;
