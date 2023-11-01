import React from "react";
import Task from "./Task";

const fakeTodo = [
  {
    title: "Work out",
    time: "8:00 am",
    completed: false,
    type: "home",
  },
  {
    title: "Clothes",
    time: "2:30 pm",
    completed: false,
    type: "work",
  },
  {
    title: "Designing",
    time: "7:00 pm",
    completed: "grocery",
    type: "Home",
  },
  {
    title: "Project",
    time: "10:30 pm",
    completed: "false",
    type: "home",
  },
];

const Tasks = () => {
  return (
    <div className="px-4 flex flex-col gap-5">
      {fakeTodo.map((todo, index) => (
        <Task todo={todo} key={index} />
      ))}
    </div>
  );
};

export default Tasks;
