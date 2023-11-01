import dbConnect from "@/lib/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  await dbConnect();
  try {
    const body = await req.json();
    const { title, completed, owner, type } = body;
    console.log(body);

    const task = await Task.create({
      title,
      completed,
      type,
      owner,
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log("ADD", e);
  }
}
