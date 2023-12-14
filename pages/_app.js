import Home from "./computadores";
import Inicio from ".";
import "../styles/global.css";
import Pecas from "./pecas";
import Link from "next/link";
import { Inter } from "next/font/google";
const nunito = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap");
      `}</style>
      <Component {...pageProps}></Component>
    </>
  );
}
