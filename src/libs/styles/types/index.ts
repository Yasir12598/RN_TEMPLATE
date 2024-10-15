import { Theme } from '@react-navigation/native';

interface CustomTheme extends Theme {
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    backgroundColor: string;
    textDarkColor: string;
    textBlackColor: string;
    textWhiteColor: string;
    borderColor: string;
    placeholderColor: string;
    successColor: string;
    warningColor: string;
    dangerColor: string;
  };
}

declare module '@react-navigation/native' {
  export function useTheme(): CustomTheme;
}

export type { CustomTheme };

