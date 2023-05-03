import React from "react";
import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from "@rneui/themed";

export function Button(props: BaseButtonProps) {
  const { ...rest } = props;
  return <BaseButton {...rest} />;
}
