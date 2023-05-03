import React from "react";
import {
  Button as BaseButton,
  type IButtonProps as BaseButtonProps,
} from "native-base";

export function Button(props: BaseButtonProps) {
  const { ...rest } = props;
  return <BaseButton {...rest} />;
}
