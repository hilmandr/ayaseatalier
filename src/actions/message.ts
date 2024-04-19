import { db } from "@/db";
import { message } from "@/db/schema";
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
      time: request.time,
    })
    .returning();
  //   revalidatePath("/dashboard/projects");

  return newMessage;
};
