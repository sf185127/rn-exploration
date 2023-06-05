import React from "react";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "react-native-ui-lib";

export function Button(props: BaseButtonProps) {
  const { ...rest } = props;
  return <BaseButton {...rest} />;
}
