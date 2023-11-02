import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Task from "@/models/task";
import { getServerSession } from "next-auth";

export async function DELETE(req, { params }) {
  try {
    const session = getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthenticated", { status: 401 });

    if (!params.userId)
      return new NextResponse("User Id is required", { status: 400 });

    if (!params.taskId)
      return new NextResponse("Task Id is required", { status: 400 });

    await dbConnect();
    const task = await Task.findOneAndDelete({
      _id: params.taskId,
      owner: params.userId,
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log("DELETE_REQ", e);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const session = getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthenticated", { status: 401 });

    if (!params.userId)
      return new NextResponse("User Id is required", { status: 400 });

    if (!params.taskId)
      return new NextResponse("Task Id is required", { status: 400 });

    const body = await req.json();
    const { completed } = body;

    const task = await Task.findByIdAndUpdate(
      { _id: params.taskId },
      { completed }
    );

    return NextResponse.json(task);
  } catch (e) {
    console.log("PATCH_REQ", e);
    return new NextResponse("Internal error", { status: 500 });
  }
}
