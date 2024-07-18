import type { WidgetUnion } from "./widgets.type";

export type ITopic = {
  title: string;
  icon: string;
  description: string;
  status: Status;
  units: Array<IUnit>;
};

export type IUnit = {
  title: string;
  icon: string;
  description: string;
  status: Status;
  lessons: Array<ILesson>;
};

export type ILesson = {
  title: string;
  icon: string;
  description: string;
  status: Status;
  widgets: Array<WidgetUnion>;
};

export enum Status {
  Default = "Default",
}
