import { ThemeProvider } from "styled-components";

export const theme = {
  backgroundImages: {
    pagesPrimary:
      "../../../assets/images/destination/background-destination-desktop.jpg",
    pagesSecondary: "../../../assets/images/crew/background-crew-desktop.jpg",
    home: "../../../assets/images/home/background-home-desktop.jpg",
    navbar: "rgba(130, 130, 130, 0.5)",
  },
  colorFonts: {
    primary: "whitesmoke",
    secondary: "#e9e9e9",
    tertiary: "white",
    quaternary: "#828282",
  },
};

export type BackgroundImages = keyof typeof theme.backgroundImages;
export type ColorFonts = keyof typeof theme.colorFonts;
interface Props {
  children: React.ReactNode;
}
export default function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
