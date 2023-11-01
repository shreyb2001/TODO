import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import { Card } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const data = await getServerSession(authOptions);
  if (!data) {
    redirect("/");
  }

  return (
    <Card className="p-2 bg-[#A18AFF] flex">
      <LeftSection userData={data} />
      <RightSection />
    </Card>
  );
}
