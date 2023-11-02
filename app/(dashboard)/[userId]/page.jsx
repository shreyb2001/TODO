import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import { Card } from "@/components/ui/card";
import dbConnect from "@/lib/mongodb";
import Task from "@/models/task";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home({ params }) {
  const data = await getServerSession(authOptions);
  if (!data) {
    redirect("/");
  }

  const owner = params.userId.replace("%40", "@");

  await dbConnect();
  const tasks = await Task.find({
    owner,
  }).sort({ createdBy: 1 });

  return (
    <Card className="p-2 bg-[#A18AFF] flex">
      <LeftSection userData={data} />
      <RightSection tasks={tasks} />
    </Card>
  );
}
