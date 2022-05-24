import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

type PropsType = {
  children: JSX.Element;
  title?: string;
};

export const Layout: FC<PropsType> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Angel De La Cruz" />
        <meta name="description" content="Información sobre Pokémon." />
        <meta name="keywords" content="Pokémon, Pokébola, pokedex" />
      </Head>
      {/* Navbar */}
      <Navbar />
      <main className="main">{children}</main>
    </>
  );
};
