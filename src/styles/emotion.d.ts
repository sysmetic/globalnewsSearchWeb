import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    primaryColor: string;
  }
}

declare module '*.svg' {
  const content: any;
  export default content;
}