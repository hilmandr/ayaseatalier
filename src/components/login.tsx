"use client";
import Container from "./container";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Login() {
  const form = "";
  return (
    <>
      <div className=" grid grid-cols-2 w-full">
        <div className=" flex w-full items-center justify-center">
          <div className=" flex flex-col w-[45%]">
            <h1 className=" font-bold text-3xl">Welcome Back</h1>
            <p className=" text-sm">Please complete your details to login.</p>
            {/* <Form>
                <form>
                  <div>
                    <FormField
                      // control={}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder=" Username" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form> */}
            <div className=" flex flex-col pt-5 gap-y-3">
              <div className=" flex flex-col gap-1">
                <label className=" text-sm">Username</label>
                <Input placeholder=" Username" />
              </div>
              <div className=" flex flex-col gap-1">
                <label className=" text-sm">Password</label>
                <Input placeholder=" Password" />
              </div>
              <div className=" flex mt-2">
                <Button className=" w-full">Login</Button>
              </div>
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
