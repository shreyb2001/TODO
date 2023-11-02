import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="px-4 max-h-[22rem] no-scrollbar flex flex-col gap-5 overflow-y-scroll">
      {tasks.length === 0 && (
        <div className="bg-white flex justify-center items-center p-4 rounded-2xl font-bold text-[#717082b4]">
          <p>No Tasks Available</p>
        </div>
      )}
      {tasks.map((task, index) => (
        <Task key={index} todo={task} />
      ))}
    </div>
  );
};

export default Tasks;
