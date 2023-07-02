import { createFont, createTamagui, createTokens } from "@tamagui/core";

export function createTheme() {
  const font = createFont({
    family: "Inter, Helvetica, Arial, sans-serif",
    size: {
      1: 12,
      2: 14,
      3: 15,
    },
    lineHeight: {
      2: 22,
    },
    weight: {
      1: "300",
      3: "600",
    },
    letterSpacing: {
      1: 0,
      2: -1,
    },
    // (native) swap out fonts by face/style
    face: {
      300: { normal: "InterLight", italic: "InterItalic" },
      600: { normal: "InterBold" },
    },
  });

  return createTamagui({
    fonts: {
      heading: font,
      body: font,
    },
    tokens: createTokens({
      color: {},
      radius: {},
      size: {},
      space: {},
      zIndex: {},
    }),
    themes: {
      default: {
        "primary.contrast-on-main": "#ffffff",
        "primary.empty-hovered": "#eaf5fe",
        "primary.empty-active": "#d7edff",
        "primary.subtle": "#c9e3f9",
        "primary.border-on-empty": "#87bbf7",
        "primary.main-on-inverted-background": "#389dfa",
        "primary.main": "#086dd9",
        "primary.main-hovered": "#08509a",
        "primary.main-active": "#134085",
        "primary.contrast-on-subtle": "#053570",
        "primary.subtle-hovered": "#B1D7F6",
        "primary.empty-active-hovered": "#BFDEF8",

        "error.contrast-on-main": "#ffffff",
        "error.empty-hovered": "#fef0ef",
        "error.empty-active": "#fee5e4",
        "error.subtle": "#fad7d6",
        "error.border-on-empty": "#f8a099",
        "error.main-on-inverted-background": "#ff6760",
        "error.main": "#dd1708",
        "error.main-hovered": "#a50601",
        "error.main-active": "#890802",
        "error.contrast-on-subtle": "#710b01",
        "error.subtle-hovered": "#F8C5C4",
        "error.empty-active-hovered": "#F9CECD",
      },
    },
  });
}
