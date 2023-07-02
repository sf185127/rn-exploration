import { Stack, styled } from "@tamagui/core";

const Component = styled(Stack, {});

export const Box = Component.styleable((props, ref) => (
  <Component ref={ref} {...props} />
));
