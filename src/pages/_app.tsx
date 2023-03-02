import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "@next/font/google";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Modal from "@/components/Modal";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rootElement =
  typeof window !== "undefined" ? document.getElementById("__next") : null;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTextField: {
      styleOverrides: {},
    },
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Modal />
      </ThemeProvider>
    </>
  );
}
