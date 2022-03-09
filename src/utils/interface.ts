export interface IStyle {
  [key: string]: string | number | ((value: number) => string | number);
}

export interface IAnimation {
  in?: {
    style?: IStyle;
  };
  out?: {
    style?: IStyle;
  };
}
