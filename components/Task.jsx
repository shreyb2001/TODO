import React from "react";
import { CheckedIcon } from "./Icons/Checked";
import { UncheckedIcon } from "./Icons/Unchecked";
import { DeleteIcon } from "./Icons/DeleteIcon";

const Task = ({ todo }) => {
  let color;

  if (todo.type === "home") {
    color = "#fd99af";
  } else if (todo.type === "work") {
    color = "#3fd4f4";
  } else {
    color = "#fac608";
  }

  return (
    <div className="bg-white flex justify-between items-center p-4 rounded-2xl font-bold text-[#717082b4]">
      <span className={`w-4 h-4 rounded-full bg-[${color}]`}></span>
      <p className="w-2/4">{todo.title}</p>
      <p>{todo.time}</p>
      <div className="flex items-center gap-2">
        <DeleteIcon />
        {todo.completed ? <CheckedIcon /> : <UncheckedIcon />}
      </div>
    </div>
  );
};

export default Task;
