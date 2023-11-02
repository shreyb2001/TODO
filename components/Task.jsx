"use client";

import React from "react";
import { CheckedIcon } from "./Icons/Checked";
import { UncheckedIcon } from "./Icons/Unchecked";
import { DeleteIcon } from "./Icons/DeleteIcon";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const Task = ({ todo }) => {
  const params = useParams();
  const router = useRouter();
  let color;

  if (todo.type === "home") {
    color = "#fd99af";
  } else if (todo.type === "work") {
    color = "#3fd4f4";
  } else {
    color = "#fac608";
  }

  const handlePatch = async () => {
    try {
      await axios.patch(`/api/${params.userId}/${todo._id}`, {
        completed: !todo.completed,
      });
      router.refresh();
      toast.success("Task Updated!");
    } catch (e) {
      console.log("PATCH_ERROR", e);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/${params.userId}/${todo._id}`);
      router.refresh();
      toast.success("Task Removed!");
    } catch (e) {
      console.log("DELETE_ERROR", e);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white flex justify-between items-center p-4 rounded-2xl font-bold text-[#717082b4]">
      <span className={`w-4 h-4 rounded-full bg-[${color}]`}></span>
      <p className="w-2/4">{todo.title}</p>
      <p>{todo.time}</p>
      <div className="flex items-center gap-2">
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <button onClick={handlePatch}>
          {todo.completed ? <CheckedIcon /> : <UncheckedIcon />}
        </button>
      </div>
    </div>
  );
};

export default Task;
