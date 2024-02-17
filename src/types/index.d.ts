import { IconType } from "react-icons";
import * as icon from "react-icons/si";

declare interface IProjects {
  title: string;
  thumbnail: string;
  date: Date;
  summary: string;
  client: string;
  content: string;
  slug: string;
  place: string;
  images: string;
  isPinned?: boolean;
}
export interface IMenu {
  label: string;
  path: string;
}

export interface IMenuDashboard {
  label: string;
  path: string;
  icon: IconType | Icon;
  // active: string;
}
