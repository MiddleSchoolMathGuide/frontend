export type WidgetUnion = WHeader | WSubHeader | WButton;

export type Widget = {
  type: WidgetType;
};

export enum WidgetType {
  Header = "Header",
  SubHeader = "SubHeader",
  Button = "Button",
  LessonBar = "LessonBar",
  TableOfContents = "TableOfContents",
  ProgressBar = "ProgressBar",
}

export type WHeader = {
  text: string;
} & Widget;

export type WSubHeader = {
  text: string;
} & Widget;

export type WButton = {
  text: string;
  indentation: number;
  borderColor: string;
} & Widget;

export type WLessonBar = {
  header: WHeader;
  unitHeader: WSubHeader;
  stateButtons: WButton[];
  activeIndex: number;
} & Widget;

export type WTableContents = {
  options: WButton[];
} & Widget;

export type WProgressBar = {
  fill: number;
} & Widget;
