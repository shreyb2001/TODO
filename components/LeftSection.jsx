import React from "react";
import UserCard from "./UserCard";
import { Separator } from "./ui/separator";
import TasksFilters from "./TasksFilters";
import Settings from "./Settings";

const LeftSection = ({ userData }) => {
  return (
    <div className="bg-white p-4 rounded-l-md flex flex-col justify-center items-center gap-4">
      <UserCard userData={userData} />
      <div className="w-4/5 ">
        <Separator className="bg-[#c1a8fe] h-1 rounded my-5" />
        <TasksFilters />
        <Settings />
      </div>
    </div>
  );
};

export default LeftSection;
