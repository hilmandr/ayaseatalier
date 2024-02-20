import { IconType } from "react-icons";
import * as icon from "react-icons/si";

declare interface IProjects {
  map(
    arg0: (projects: any, i: any) => import("react").JSX.Element
  ): import("react").ReactNode;
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
