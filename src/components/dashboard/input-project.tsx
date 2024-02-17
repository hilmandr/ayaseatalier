"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import React, { forwardRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { EditorProps } from "react-draft-wysiwyg";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title must be filled.",
  }),
  place: z.string().min(1, {
    message: "Place must be filled.",
  }),
  client: z.string().min(1, {
    message: "Place must be filled.",
  }),
  date: z.string().min(1, {
    message: "Place must be filled.",
  }),
  summary: z.string().min(1, {
    message: "Place must be filled.",
  }),
  thumbnail: z.string().min(1, {
    message: "Place must be filled.",
  }),
});

export default forwardRef<Object, EditorProps>(function RichTextEditor(
  props,
  ref
) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      place: "",
      client: "",
      date: "",
      summary: "",
      thumbnail: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const onDrop = useCallback(() => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div className=" flex-1 pt-5 w-full">
        <div className=" flex-1 w-full px-6 pb-6 border border-slate-200 rounded-lg">
          <Form {...form}>
            <form
              // onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className=" grid grid-cols-2 w-full gap-6 py-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project&apos;s Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Project's Title" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the title of your project&apos;s.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="place"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project&apos;s Place</FormLabel>
                      <FormControl>
                        <Input placeholder="Project's Place" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the location of your project&apos;s.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="client"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project&apos;s Client</FormLabel>
                      <FormControl>
                        <Input placeholder="Project's Client" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is the client&apos;s name of your project&apos;s.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Project&apos;s Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            // selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        This is the completion date of your project&apos;s.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project&apos;s Summary</FormLabel>
                      <FormControl className=" h-16">
                        <Textarea
                          placeholder="Type your summary here."
                          id="message-2"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the summary of your project&apos;s.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project&apos;s Thumbnail</FormLabel>
                      <FormControl>
                        <div
                          {...getRootProps()}
                          className=" flex w-full h-16 border items-center justify-center rounded-lg"
                        >
                          <Input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <p className=" text-zinc-500">
                              Drag or drop image files here, or click to select
                              files
                            </p>
                          )}
                        </div>
                      </FormControl>
                      <FormDescription>
                        This is the thumbnail of your project&apos;s.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Editor
                editorClassName={cn(
                  "border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                  props.editorClassName
                )}
                toolbar={{
                  options: ["inline", "list", "link", "history", "image"],
                  inline: {
                    options: ["bold", "italic", "underline"],
                  },
                }}
                editorRef={(r: Object | null) => {
                  if (typeof ref === "function") {
                    ref(r);
                  } else if (ref) {
                    ref.current = r;
                  }
                }}
                {...props}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
});
