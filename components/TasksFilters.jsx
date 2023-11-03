import React from "react";
import { EventsIcon } from "./Icons/Events";

const TasksFilters = () => {
  return (
    <div className="flex gap-8 justify-start py-4">
      <EventsIcon />
      <div>
        <p className="font-extrabold text-lg text-[#717082b4] tracking-widest">
          Categories 
        </p>
        <div className="flex flex-col items-start">
          <div className="flex justify-center items-center gap-3 py-2">
            <span className="w-4 h-4 rounded-full bg-[#fd99af]"></span>
            <h3 className="font-bold text-lg text-[#717082b4]">Home</h3>
          </div>
          <div className="flex justify-center items-center gap-3 py-2">
            <span className="w-4 h-4 rounded-full bg-[#3fd4f4]"></span>
            <h3 className="font-bold text-lg text-[#717082b4]">Work</h3>
          </div>
          <div className="flex justify-center items-center gap-3 py-2">
            <span className="w-4 h-4 rounded-full bg-[#fac608]"></span>
            <h3 className="font-bold text-lg text-[#717082b4]">
              Personal
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksFilters;
