export interface IStyle {
  [key: string]: string | number | ((value: number) => string);
}

export interface IAnimation {
  in?: {
    style?: IStyle;
  };
  out?: {
    style?: IStyle;
  };
}
