import type { WidgetUnion } from "./widgets.type";

export type ITopic = {
  title: string;
  icon: string;
  description: string;
  status: Status;
  units: Array<IUnit>;
  _id?: string;
  new?: boolean;
  index?: number;
};

export type IUnit = {
  title: string;
  icon: string;
  description: string;
  status: Status;
  lessons: Array<ILesson>;
  _id?: string;
  new?: boolean;
  index?: number;
};

export type ILesson = {
  title: string;
  icon: string;
  description: string;
  status: Status;
  widgets: Array<WidgetUnion>;
  _id?: string;
  new?: boolean;
  index?: number;
};

export enum Status {
  Default = "Default",
}
