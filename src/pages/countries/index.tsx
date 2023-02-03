import Nav from "@/components/Nav/Nav";
import { Country } from "@/gql/graphql";
import { request, gql } from "graphql-request";
import Head from "next/head";

import Link from "next/link";
import styled from "styled-components";

const Country = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: white;
  color: black;
  padding: 1rem 2rem;
  border: 2px solid black;
  border-radius: 4px;
  &:hover {
    opacity: 0.9;
  }
`;

const CountriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Section = styled.section`
  padding: 4rem 8rem;
`;

const Code = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
`;

export const CountryLink = ({ country }: { country: Country }) => {
  return (
    <Link href={`countries/${country.code}`}>
      <Country>
        <span>{country.emoji}</span>
        <span>{country.name}</span>
        <Code>{country.code}</Code>
      </Country>
    </Link>
  );
};

const Countries = ({ data }: { data: Country[] }) => {
  return (
    <>
      <Head>
        <title>Countries</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Section>
        <CountriesWrapper>
          {data.map((el) => (
            <CountryLink country={el} key={el.code} />
          ))}
        </CountriesWrapper>
      </Section>
    </>
  );
};

export default Countries;

export async function getServerSideProps() {
  const query = gql`
    query {
      countries {
        code
        name
        emoji
      }
    }
  `;
  const data = await request("https://countries.trevorblades.com/", query);

  return {
    props: {
      data: data.countries,
    },
  };
}
