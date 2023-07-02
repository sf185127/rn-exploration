import { styled, Stack } from "@tamagui/core";
import { ButtonContext } from "./context";

const Component = styled(Stack, {
  name: "Button",
  context: ButtonContext,
  focusable: true,
  role: "button",

  display: "flex",
  paddingHorizontal: 17,
  paddingVertical: 8,
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  borderRadius: "8px",
  borderWidth: "1px",
  borderColor: "transparent",

  variants: {
    variant: {
      contained: {
        backgroundColor: "$primary.main",

        pressStyle: {
          backgroundColor: "$primary.main-active",
        },
      },
      outlined: {
        backgroundColor: "transparent",
        borderColor: "$primary.border-on-empty",

        hoverStyle: {
          backgroundColor: "$primary.empty-active",
        },

        pressStyle: {
          backgroundColor: "$primary.empty-active",
        },
      },
      text: {
        backgroundColor: "transparent",
        borderColor: "$primary.main",
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
      destructive: {
        backgroundColor: "$error.main",

        pressStyle: {
          backgroundColor: "$error.main-active",
        },
      },
    },
  } as const,

  defaultVariants: {
    variant: "contained",
    size: "medium",
  },
});

export const ButtonContainer = Component.styleable((props, ref) => (
  <Component ref={ref} {...props} />
));
