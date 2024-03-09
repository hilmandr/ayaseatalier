import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar, serial } from "drizzle-orm/pg-core";

export const project = pgTable("project", {
  id: uuid("id").defaultRandom().primaryKey(),
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
