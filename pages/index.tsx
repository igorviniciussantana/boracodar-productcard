import Head from "next/head";
import dynamic from "next/dynamic";
import { Card, Header } from "../components/imports";
import { Spinner } from "@chakra-ui/react";
const Couch = dynamic(() => import("../components/Couch/Couch"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>#boraCodar | Product Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Product Card para o segundo desafio do projeto Bora Codar da Rocketseat."
        />
      </Head>
      <Header />

      <main>
        <Couch />
        <Card />
      </main>
    </>
  );
}
