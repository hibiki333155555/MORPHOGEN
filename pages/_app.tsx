import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: "morphogen",
  description: "we are morphogen",
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head >
        <title>morphogen</title>
      </Head >
      <div className=" w-screen h-screen bg-white">
        <Component {...pageProps} />
      </div>
    </>
  )
}
