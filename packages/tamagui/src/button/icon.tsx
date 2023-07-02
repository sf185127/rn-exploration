import { styled, Text } from "@tamagui/core";
import { ButtonContext } from "./context";

const Component = styled(Text, {
  name: "ButtonIcon",
  context: ButtonContext,

  variants: {
    variant: {
      contained: {},
      outlined: {},
      text: {},
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
    color: {
      primary: {},
      secondary: {},
      destructive: {},
    },
  } as const,

  defaultVariants: {
    variant: "contained",
    size: "medium",
  },
});

export const ButtonIcon = Component.styleable((props, ref) => (
  <Component ref={ref} {...props} />
));
