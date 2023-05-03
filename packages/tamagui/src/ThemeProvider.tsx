import React from "react";
import {
  TamaguiProvider as BaseThemeProvider,
  type TamaguiProviderProps as BaseThemeProviderProps,
  createTamagui as baseCreateTheme,
} from "tamagui";

export const createTheme = baseCreateTheme;

export function ThemeProvider(props: BaseThemeProviderProps) {
  const { ...rest } = props;
  return <BaseThemeProvider {...rest} />;
}
