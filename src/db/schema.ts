import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar, serial } from "drizzle-orm/pg-core";

export const project = pgTable("project", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug").notNull(),
  title: varchar("title").notNull(),
  place: varchar("place").notNull(),
  client: varchar("client").notNull(),
  date: timestamp("date").notNull(),
  summary: varchar("summary").notNull(),
  thumbnail: varchar("thumbnail").notNull(),
  content: varchar("content").notNull(),
});

export type Project = InferSelectModel<typeof project>;
export type NewProject = InferInsertModel<typeof project>;

export const message = pgTable("message", {
  id: uuid("id").defaultRandom().primaryKey(),
  // slug: varchar("slug").notNull(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  message: varchar("message").notNull(),
  time: timestamp("time").notNull(),
});

export type Message = InferSelectModel<typeof message>;
export type NewMessage = InferInsertModel<typeof message>;
