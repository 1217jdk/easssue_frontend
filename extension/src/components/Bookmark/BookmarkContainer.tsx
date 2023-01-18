import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};
export const BookmarkContainer: React.FC<ContainerProps> = (ContainerProps) => {
  return (
    <div className="bg-black/25 p-4 rounded-lg m-2 mb-8">
      <div className="grid grid-cols-10 gap-4">{ContainerProps.children}</div>
    </div>
  );
};
