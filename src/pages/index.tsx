import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Image from "next/image";
import Road from "public/road.jpg";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 8rem;
  align-items: center;
  gap: 4rem;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Places</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main>
        <Section>
          <Image src={Road} alt="road-signs" />
        </Section>
      </main>
    </>
  );
}
