import React from "react";
import Task from "./Task";

const fakeTodo = [
  {
    title: "Work out",
    type: "work",
    completed: false,
    owner: "21uec125@lnmiit.ac.in",
    __v: 0,
  },
  {
    title: "Halo Frinds ",
    type: "work",
    completed: false,
    owner: "bloodconnect.notion@gmail.com",
    __v: 0,
  },
  {
    title: "fuck the person sitting near me",
    type: "work",
    completed: false,
    owner: "khushalgoyal77@gmail.com",
    __v: 0,
  },
  {
    title: "Ahhhhh fuck on the bed",
    type: "home",
    completed: false,
    owner: "khushalgoyal77@gmail.com",
    __v: 0,
  },
  {
    title: "vdgsdzfgvxcvzxc",
    type: "work",
    completed: false,
    owner: "khushalgoyal77@gmail.com",
    __v: 0,
  },
  {
    title: "zxcvzxcvzxcv",
    type: "work",
    completed: false,
    owner: "khushalgoyal77@gmail.com",
    __v: 0,
  },
  {
    title: "zxcvzxcvzxcv",
    type: "work",
    completed: false,
    owner: "khushalgoyal77@gmail.com",
    __v: 0,
  },
  {
    title: "zxcvzxcvcvzxcv",
    type: "work",
    completed: false,
    owner: "khushalgoyal77@gmail.com",
    __v: 0,
  },
  {
    title: "zcxvzxcvzxcv",
    type: "work",
    completed: false,
    owner: "khushalgoyal77@gmail.com",
    __v: 0,
  },
];

const Tasks = ({ tasks }) => {
  return (
    <div className="px-4 max-h-[22rem] flex flex-col gap-5 overflow-y-scroll">
      {tasks.length === 0 && (
        <div className="bg-white flex justify-center items-center p-4 rounded-2xl font-bold text-[#717082b4]">
          <p>No Tasks Available</p>
        </div>
      )}
      {fakeTodo.map((task, index) => (
        <Task key={index} todo={task} />
      ))}
    </div>
  );
};

export default Tasks;
