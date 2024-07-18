export type WidgetUnion = WHeader | WSubHeader;

export type Widget = {
  type: WidgetType;
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
