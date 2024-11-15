import { createTheme } from "@mui/material";

export const PALETTE = {
  BLUE: "#4285F4",
  LIGHT_BLUE: "#CCEEFF",
  RED: "#DB4437",
  GREEN: "#0F9D58",
  VIOLET: "#9E15DA",
  LIGHT_GREY: "#CCCCCC",
  GREY: "#888888",
  DARK_GREY: "#444444",
  YELLOW: "#F4B400",
  ORANGE: "#E48A03",
  WHITE: "#FFFFFF",
  BLACK: "#000000",
};

export const FONT_FAMILY = 'Quicksand';
export const DEFAULT_INPUT_COLOR = PALETTE.BLACK

export default createTheme({
  palette: {
    common: {
      blue: `${PALETTE.BLUE}`,
      red: `${PALETTE.RED}`,
      yellow: `${PALETTE.YELLOW}`,
      green: `${PALETTE.GREEN}`,
    },
    primary: {
      main: `${PALETTE.BLUE}`,
      secondary: `${PALETTE.VIOLET}`,
    },
    success: {
      main: `${PALETTE.GREEN}`,
    },
    danger: {
      main: `${PALETTE.RED}`,
    },
    warning: {
      main: `${PALETTE.YELLOW}`,
    },
  },
  typography: {
    htmlFontSize: 20,
    fontFamily: `${FONT_FAMILY}`,
    color: `${DEFAULT_INPUT_COLOR}`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    h7: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    h8: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 500,
      fontSize: "0.85rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    h9: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 400,
      fontSize: "0.65rem",
      lineHeight: 1.6,
      letterSpacing: "0.0175em",
    },
    h10: {
      fontFamily: `${FONT_FAMILY}`,
      color: `${DEFAULT_INPUT_COLOR}`,
      fontWeight: 300,
      fontSize: "0.45rem",
      lineHeight: 1.8,
      letterSpacing: "0.0225em",
    },
  },
});
