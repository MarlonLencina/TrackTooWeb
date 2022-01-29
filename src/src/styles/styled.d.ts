import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: string;
      red: string;
      snow:   string;
      white:  string;
    },
    fonts: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
    }
  }
}