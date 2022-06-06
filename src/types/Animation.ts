import { Style } from "./Style";

export interface Animation {
  in?: {
    style?: Style;
  };
  out?: {
    style?: Style;
  };
}
