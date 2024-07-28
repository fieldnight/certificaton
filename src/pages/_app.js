import GlobalStyle from "./home/global";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
