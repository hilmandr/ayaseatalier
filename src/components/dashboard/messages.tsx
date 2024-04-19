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
