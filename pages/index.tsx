import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Topspeed Flights</title>
      </Head>
      <Hero />
    </>
  );
}
