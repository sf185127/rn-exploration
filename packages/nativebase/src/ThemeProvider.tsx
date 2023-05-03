import React from "react";
import {
  NativeBaseProvider as BaseThemeProvider,
  NativeBaseProviderProps as BaseThemeProviderProps,
  extendTheme as baseCreateTheme,
} from "native-base";

export const createTheme = baseCreateTheme;

export function ThemeProvider(props: BaseThemeProviderProps) {
  const { ...rest } = props;
  return <BaseThemeProvider {...rest} />;
}
