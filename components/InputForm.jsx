"use client";

import { useForm } from "react-hook-form";
import React from "react";
import { Input } from "./ui/input";
import { AddIcon } from "./Icons/AddNotes";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Task must contain at least 3 characters",
  }),
  completed: z.boolean(false),
  owner: z.string(),
  type: z.string().default("work"),
});

const InputForm = () => {
  const params = useParams();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      completed: false,
      owner: "",
      type: "",
    },
  });

  const onSubmit = async (data) => {
    const uploadData = { ...data, owner: params.userId };
    try {
      await axios.post(`/api/`, uploadData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white flex justify-around items-center p-3 rounded-2xl">
      <div className="flex justify-center items-center gap-1">
        <span className="w-4 h-4 rounded-full bg-[#fd99af]"></span>
        <span className="w-4 h-4 rounded-full bg-[#3fd4f4]"></span>
        <span className="w-4 h-4 rounded-full bg-[#fac608]"></span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center items-center"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-[24rem] border-none"
                    placeholder="What is your next task?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="p-2">
            <AddIcon />
          </button>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
