import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "/default.png",
    },
    type: {
      type: String,
      default: "work",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
