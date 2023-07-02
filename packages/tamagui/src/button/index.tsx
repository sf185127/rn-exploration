import { withStaticProperties } from "@tamagui/core";
import { ButtonContainer } from "./container";
import { ButtonIcon } from "./icon";
import { ButtonText } from "./text";

export const Button = withStaticProperties(ButtonContainer, {
  Text: ButtonText,
  Icon: ButtonIcon,
});
