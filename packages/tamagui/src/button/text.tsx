import { styled, Text } from "@tamagui/core";
import { ButtonContext } from "./context";

const Component = styled(Text, {
  name: "Button",
  context: ButtonContext,

  fontSize: 15,
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: 26,
  letterSpacing: -0.093,
  flex: 1,
  userSelect: "none",

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
  } as const,
});

export const ButtonText = Component.styleable((props, ref) => (
  <Component ref={ref} {...props} />
));
