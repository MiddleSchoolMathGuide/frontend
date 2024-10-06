export type WidgetUnion = WHeader | WSubHeader | WDesmos | WPolyPad;

export type Widget = {
  type: WidgetType;
  _id?: string;
  new?: boolean;
  index?: number;
};

export enum WidgetType {
  Header = "Header",
  SubHeader = "SubHeader",
  PolyPad = "PolyPad",
  Desmos = "Desmos",
  Paragraph = "Paragraph",
}

export type WHeader = {
  text: string;
} & Widget;

export type WSubHeader = {
  text: string;
} & Widget;

export type WPolyPad = {
  embedLink: string;
  width?: number;
  height?: number;
} & Widget;

export type WDesmos = {
  inputFunction?: string;
} & Widget;

export type WParagraph = {
  data: string;
} & Widget;

export const HeaderTypes = [WidgetType.Header, WidgetType.SubHeader];
