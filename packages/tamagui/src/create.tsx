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
        "background.paper": "#ffffff",
        "background.default": "#fafafa",

        "text.primary": "#212121",
        "text.secondary": "#656565",
        "text.disabled": "#9e9e9e",

        "logo.subdued": "#6e6e6e",

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

        "accent.contrast-on-main": "#ffffff",
        "accent.empty-hovered": "#f2f3f4",
        "accent.empty-active": "#eaeaea",
        "accent.subtle": "#dfdfdf",
        "accent.border-on-empty": "#b8b7b7",
        "accent.main-on-inverted-background": "#99999a",
        "accent.main": "#6f6f73",
        "accent.main-hovered": "#4f5150",
        "accent.main-active": "#44414a",
        "accent.contrast-on-subtle": "#343738",
        "accent.subtle-hovered": "#D1D1D1",
        "accent.empty-active-hovered": "#D9D9D9",

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

        "success.contrast-on-main": "#ffffff",
        "success.empty-hovered": "#ebf6ed",
        "success.empty-active": "#dfeee1",
        "success.subtle": "#d1e5cf",
        "success.border-on-empty": "#94c393",
        "success.main-on-inverted-background": "#39af3e",
        "success.main": "#24802d",
        "success.main-hovered": "#0e5e0e",
        "success.main-active": "#064e05",
        "success.contrast-on-subtle": "#08400e",
        "success.subtle-hovered": "#BCD9BA",
        "success.empty-active-hovered": "#C3DFC7",

        "warning.contrast-on-main": "#ffffff",
        "warning.empty-hovered": "#fff1e1",
        "warning.empty-active": "#ffe6cc",
        "warning.subtle": "#f8dabb",
        "warning.border-on-empty": "#ebaa72",
        "warning.main-on-inverted-background": "#dd832f",
        "warning.main": "#ab5a05",
        "warning.main-hovered": "#7b4206",
        "warning.main-active": "#653700",
        "warning.contrast-on-subtle": "#552c07",
        "warning.subtle-hovered": "#F5CA9E",
        "warning.empty-active-hovered": "#FFD2A3",

        "info.contrast-on-main": "#ffffff",
        "info.empty-hovered": "#f1f3ff",
        "info.empty-active": "#e5e9ff",
        "info.subtle": "#dbddfa",
        "info.border-on-empty": "#aeb2f4",
        "info.main-on-inverted-background": "#7e91fe",
        "info.main": "#4a5aff",
        "info.main-hovered": "#2f40c1",
        "info.main-active": "#2f2dad",
        "info.contrast-on-subtle": "#2b306e",
        "info.subtle-hovered": "#CED0F8",
        "info.empty-active-hovered": "#D1D8FF",

        "other.divider": "#e0e0e0",
        "other.outline-border": "#c4c4c4",
        "other.backdrop-overlay": "#a6a6a6",
        "other.filled-input-overlay": "#f5f5f5",
        "other.standard-input-line": "#949494",
        "other.rating-active": "#d68037",
        "other.snackbar-background": "#323232",

        "grey.50": "#fafafa",
        "grey.100": "#f5f5f5",
        "grey.200": "#eeeeee",
        "grey.300": "#e0e0e0",
        "grey.400": "#bdbdbd",
        "grey.500": "#9e9e9e",
        "grey.600": "#757575",
        "grey.700": "#616161",
        "grey.800": "#424242",
        "grey.900": "#212121",
        "grey.black": "#000000",
      },
    },
  });
}
