import React, { ReactNode } from "react";
import {
  ThemeProvider as BaseThemeProvider,
  MD3Theme as BaseTheme,
} from "react-native-paper";

export type ThemeProviderProps = {
  theme?: BaseTheme;
  children?: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { ...rest } = props;
  return <BaseThemeProvider {...rest} />;
}
