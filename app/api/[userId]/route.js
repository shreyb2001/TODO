import dbConnect from "@/lib/mongodb";
import Task from "@/models/task";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req, { params }) {
  try {
    const session = getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    const body = await req.json();
    const { title, completed, type } = body;

    if (!params.userId) {
      return new NextResponse("Id is required", { status: 400 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    await dbConnect();
    const task = await Task.create({
      title,
      completed,
      type: type || "work",
      owner: params.userId,
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log("ADD", e);
  }
}

export async function GET(req, { params }) {
  try {
    const session = getServerSession(authOptions);
    if (!session) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.userId) {
      return new NextResponse("Id is required", { status: 400 });
    }

    const owner = params.userId.replace("%40", "@");
    await dbConnect();
    const tasks = await Task.find({
      owner,
    });

    return NextResponse.json(tasks);
  } catch (e) {
    console.log("GET", e);
    return new NextResponse("Internal error", { status: 500 });
  }
}
