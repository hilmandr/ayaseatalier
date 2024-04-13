"use client";

import { Login, login } from "@/lib/validations/login.validation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

export default function Login() {
  const form = useForm<Login>({
    resolver: zodResolver(login),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<Login> = useCallback(async (data) => {
    signIn("credentials", {
      username: data.username,
      password: data.password,
      callbackUrl: "/dashboard",
    });
  }, []);

  return (
    <>
      <div className=" grid grid-cols-2 w-full">
        <div className=" flex w-full items-center justify-center">
          <div className=" flex flex-col w-[45%]">
            <h1 className=" font-bold text-3xl">Welcome Back</h1>
            <p className=" text-sm">Please complete your details to login.</p>
            <div className=" flex flex-col pt-5 gap-y-3">
              <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Username" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Password" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className=" flex mt-2">
                    <Button className=" w-full">Login</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className=" flex w-full items-center justify-center">
          <div className=" bg-[url('/image/hero.jpg')] bg-center bg-cover w-full h-[100dvh] relative z-10"></div>
        </div>
      </div>
    </>
  );
}
