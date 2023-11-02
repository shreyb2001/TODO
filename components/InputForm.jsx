"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";
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
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

const buttons = [
  {
    id: "home",
    color: "#fd99af",
  },
  {
    id: "work",
    color: "#3fd4f4",
  },
  {
    id: "personal",
    color: "#fac608",
  },
];

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Task must contain at least 3 characters",
  }),
  completed: z.boolean(false),
  type: z.string().default("work"),
});

const InputForm = () => {
  const params = useParams();
  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState("work");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      completed: false,
      type: "work",
    },
  });

  const onClick = (id) => {
    if (selectedValue === id) {
      setSelectedValue(null);
    } else {
      setSelectedValue(id);
    }
  };

  const onSubmit = async (data) => {
    const uploadData = { ...data, type: selectedValue };
    try {
      await axios.post(`/api/${params.userId}`, uploadData);
      router.refresh();
      toast.success("Task Added!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      form.resetField("title", "");
      setSelectedValue(null);
    }
  };

  return (
    <div className="bg-white flex justify-around items-center p-3 rounded-2xl">
      <div className="flex justify-center items-center gap-1">
        {buttons.map((button, index) => (
          <span
            key={index}
            className={cn(
              `w-4 h-4 rounded-full bg-[${button.color}] cursor-pointer`,
              selectedValue === button.id && "w-7 h-7"
            )}
            onClick={() => onClick(button.id)}
          ></span>
        ))}
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
