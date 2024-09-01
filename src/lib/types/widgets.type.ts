export type WidgetUnion = WHeader | WSubHeader;

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
  width?: number;
  height?: number;
} & Widget;

export const HeaderTypes = [
  WidgetType.Header,
  WidgetType.SubHeader,
  WidgetType.PolyPad,
  WidgetType.Desmos,
];
