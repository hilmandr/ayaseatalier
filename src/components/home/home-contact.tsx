"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import * as yup from "yup";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { createMessage } from "../../actions/message";
import {
  CreateMessageRequest,
  createMessageRequest,
} from "../../lib/validations/contact.validation";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "@/lib/validations/contact.validation";

export default function HomeContact() {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(createMessageRequest),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const submitNodemailer: SubmitHandler<ContactSchema> = useCallback(
    async (values) => {
      setLoading(true);
      const res = await axios.post<{ message: string }>("/api/contact", values);
      console.log(res);
      if (res.status === 200) {
        const res = await createMessage(values);
        form.reset();
        toast.success("Message has been sent!");
        setLoading(false);
        return res;
      }
    },
    [form]
  );
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <h1 className=" text-5xl font-normal text-center pt-24" id="contact">
        Let&#39;s get in touch
      </h1>
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 lg:px-32 px-0 lg:py-20 gap-y-20 gap-x-10 items-center justify-between">
        <div className=" aspect-[7/10] relative max-w-xs hidden md:block">
          <Image className="" src="/image/contact.jpg" alt="" fill></Image>
        </div>
        <div className=" flex flex-col">
          <p className=" leading-loose">
            Engage with Me: Feel Free to Get in Touch – I&#39;m Excited to
            Connect with You!
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitNodemailer)}>
              <div className=" mt-5 flex flex-col gap-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <input
                          type="text"
                          className=" h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <input
                          type="text"
                          className=" h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <textarea
                          className=" h-28 w-full border-b border-black px-2 py-1 focus:outline-none"
                          maxLength={255}
                          placeholder="Write your message..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Maximum 255 Character</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" pt-5 justify-start">
                {loading ? (
                  <Button disabled className=" w-36 h-14 rounded-full py-2">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    onClick={() => submitNodemailer}
                    type="submit"
                    className=" flex w-36 h-14 bg-black text-white border rounded-full py-2 justify-center items-center hover:text-black hover:bg-white transition-all duration-150 hover:border-stone-800"
                  >
                    <p className=" text-center">Send</p>
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
