"use client";
import { Icons } from "@/components/Icons/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data } = useSession();

  if (data) {
    return redirect(`/${data.user.email}`);
  }

  return (
    <>
      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">Sign In</TabsTrigger>
          <TabsTrigger value="signUp">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Log in to your account</CardTitle>
              <CardDescription>
                Enter your email below to log in to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("google")}
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Log In</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
