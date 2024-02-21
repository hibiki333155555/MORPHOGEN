import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "morphogen",
  description: "we are morphogen",
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
