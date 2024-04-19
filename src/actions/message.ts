"use server";
import { db } from "@/db";
import { Message, message } from "@/db/schema";
import { CreateMessageRequest } from "@/lib/validations/project.validation";
import { revalidatePath } from "next/cache";

export const createMessage = async (request: CreateMessageRequest) => {
  const newMessage = await db
    .insert(message)
    .values({
      //   slug: slugify(request.title),
      name: request.name,
      email: request.email,
      message: request.message,
      time: new Date(),
    })
    .returning();
  //   revalidatePath("/dashboard/projects");

  return newMessage;
};

/**
 * Get messages
 * @returns
 */
export const getMessages = async (): Promise<Message[]> => {
  const messages = await db.query.message.findMany();
  return messages;
};
