import { createStyledContext } from "@tamagui/core";

export const ButtonContext = createStyledContext<{
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}>({
  variant: "contained",
  size: "medium",
});
