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
}

export type WHeader = {
  text: string;
} & Widget;

export type WSubHeader = {
  text: string;
} & Widget;


export const HeaderTypes = [WidgetType.Header, WidgetType.SubHeader];
