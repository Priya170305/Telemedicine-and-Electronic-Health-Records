import { createTheme } from "@mui/material/styles";

/**
 * Design tokens
 * - Primary: deep clinical teal — calm, trustworthy, not "startup blue"
 * - Secondary: indigo — used sparingly for interactive accents
 * - Alert/urgent: warm coral — reserved for anything safety-critical
 * - Display face: Manrope (headings) / Body face: Inter (everything else)
 */
const tokens = {
  primary: "#0F6E63",
  primaryDark: "#0A4F47",
  primaryLight: "#E4F2EF",
  secondary: "#3D4C9E",
  coral: "#D9634B",
  ink: "#141B1A",
  slate: "#5B6B69",
  paper: "#FFFFFF",
  background: "#F5F8F7",
  border: "#DCE6E4",
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: tokens.primary, dark: tokens.primaryDark, light: tokens.primaryLight },
    secondary: { main: tokens.secondary },
    error: { main: tokens.coral },
    background: { default: tokens.background, paper: tokens.paper },
    text: { primary: tokens.ink, secondary: tokens.slate },
    divider: tokens.border,
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: { fontFamily: "'Manrope', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Manrope', sans-serif", fontWeight: 800 },
    h3: { fontFamily: "'Manrope', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Manrope', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Manrope', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Manrope', sans-serif", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, paddingInline: 18, paddingBlock: 9 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${tokens.border}`,
          boxShadow: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none", borderBottom: `1px solid ${tokens.border}` },
      },
    },
  },
});

export const designTokens = tokens;