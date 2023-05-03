import React from "react";
import {
  Button as PaperButton,
  type ButtonProps as PaperButtonProps,
} from "react-native-paper";

export function Button(props: PaperButtonProps) {
  const { ...rest } = props;
  return <PaperButton mode="contained" {...rest} />;
}
