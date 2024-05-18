"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Message } from "@/db/schema";
import { format } from "date-fns";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Eye } from "iconsax-react";

interface MessageItemProps {
  message: Message[];
}

export default function Messages({ message }: MessageItemProps) {
  const [Message, setMessage] = useState(message);
  const [searchMessage, setSearchMessage] = useState("");
  const handleSearchMessage = (e: any) => {
    const text = e.target.value;
    if (text != "") {
      let results = [...message];
      results = results.filter((project) => {
        return project.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      });
      setMessage(results);
    } else {
      setMessage(message);
    }

    setSearchMessage(e.target.value);
  };
  return (
    <>
      <div className=" flex w-80 my-5">
        <Input
          type="text"
          placeholder="Search Sender Name..."
          value={searchMessage}
          onChange={handleSearchMessage}
        />
      </div>
      <div className=" border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          {Message.length === 0 ? (
            <>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={6} className=" text-center">
                    There is nothing to show. Please add some project.
                  </TableCell>
                </TableRow>
              </TableFooter>
            </>
          ) : (
            <>
              {Message.map((message, i) => (
                <>
                  <TableBody>
                    <TableRow>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{message.name}</TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{message.message}</TableCell>
                      <TableCell>{format(message.time, "PPP")}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger>
                            <Eye size="26" color="#223DEE" variant="Bulk" />
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                Message from {message.name}
                              </DialogTitle>
                              <DialogDescription className=" text-black mt-4">
                                <div className=" grid grid-cols-2">
                                  <div className=" flex flex-col">
                                    <p>Sender&#39;s Name</p>
                                    <p>Email</p>

                                    <p>Time</p>
                                  </div>
                                  <div className=" flex flex-col">
                                    <p>: {message.name}</p>
                                    <p>: {message.email}</p>

                                    <p>: {format(message.time, "PPpp")}</p>
                                  </div>
                                </div>
                                <div className=" flex flex-col w-full mt-4">
                                  <div className=" flex w-full rounded-lg border">
                                    <p className=" p-3">{message.message}</p>
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              ))}
            </>
          )}
        </Table>
      </div>
    </>
  );
}
