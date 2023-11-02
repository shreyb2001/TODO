import React from "react";
import InputForm from "./InputForm";
import Tasks from "./Tasks";

const RightSection = ({ tasks }) => {
  return (
    <div className="p-10 flex flex-col gap-12 w-[40rem]">
      <div className="text-white">
        <p className="text-2xl font-bold">Today main focus</p>
        <p className="text-3xl font-extrabold">Design team meeting</p>
      </div>
      <InputForm />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default RightSection;
