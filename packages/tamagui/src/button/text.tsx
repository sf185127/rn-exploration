import { styled, Text } from "@tamagui/core";
import { ButtonContext } from "./context";

const Component = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,

  fontSize: 15,
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 26,
  letterSpacing: -0.093,
  flex: 1,

  variants: {
    variant: {
      contained: {
        color: "$primary.contrast-on-main",
      },
      outlined: {
        color: "$primary.main",
      },
      text: {
        color: "$primary.main",
      },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
    color: {
      primary: {},
      secondary: {},
      destructive: { color: "$error.main" },
    },
  } as const,

  defaultVariants: {
    variant: "contained",
    size: "medium",
  },
});

export const ButtonText = Component.styleable((props, ref) => (
  <Component ref={ref} {...props} />
));
