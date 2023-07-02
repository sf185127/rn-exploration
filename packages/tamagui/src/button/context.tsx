import { createStyledContext } from "@tamagui/core";

export const ButtonContext = createStyledContext<{
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "destructive";
}>({
  variant: "contained",
  size: "medium",
  color: undefined,
});
