import React, { ReactNode } from "react";
import {
  ThemeProvider as BaseThemeProvider,
  createTheme as baseCreateTheme,
  type CreateThemeOptions as BaseThemeOptions,
} from "@rneui/themed";

export const createTheme = baseCreateTheme;

export type ThemeProviderProps = {
  theme?: BaseThemeOptions;
  children?: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { ...rest } = props;
  return <BaseThemeProvider {...rest} />;
}
