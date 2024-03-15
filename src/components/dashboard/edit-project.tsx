"use client";
import React, { forwardRef, useCallback } from "react";
import ContentEditor from "@/components/dashboard/froala-editor";
import { GetProjectBySlug, createProject } from "@/actions/project";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
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
import {
  CreateProjectRequest,
  createProjectRequest,
} from "@/lib/validations/project.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Project, project } from "@/db/schema";

interface PageParams {
  project: Project;
}
export default function EditProjectForm({ project }: PageParams) {
  const form = useForm<CreateProjectRequest>({
    resolver: zodResolver(createProjectRequest),
    defaultValues: {
      title: "",
      place: "",
      client: "",
      content: "",
      date: new Date(),
      summary: "",
      thumbnail: "Thumbnail",
    },
  });

  const onSubmit: SubmitHandler<CreateProjectRequest> = useCallback(
    async (data) => {
      const res = await createProject(data);
      console.log(data);
      toast.success("success add project");
      return res;
    },
    []
  );

  const onDrop = useCallback(() => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <>
      <div className=" flex-1 pt-5 w-full">
        <div className=" flex-1 w-full px-6 pb-6 border border-slate-200 rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className=" grid grid-cols-2 w-full gap-6 py-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project&apos;s Title</FormLabel>
                      <FormControl>
                        <Input value={project.title} />
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
                        <Input value={project.place} />
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
                        <Input value={project.client} />
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
                        <Textarea value={project.summary} id="message-2" />
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
                              {project.thumbnail}
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

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project&apos;s Client</FormLabel>
                    <FormControl>
                      <ContentEditor
                        value={project.content}
                        setValue={(value) => form.setValue("content", value)}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the client&apos;s name of your project&apos;s.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}