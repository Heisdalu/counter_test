import CounterProvider from "@/context/CounterProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  );
}
