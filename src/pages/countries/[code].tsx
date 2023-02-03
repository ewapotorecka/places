import { Card } from "@/components/Card/Card";
import Nav from "@/components/Nav/Nav";
import { Country } from "@/gql/graphql";
import request, { gql } from "graphql-request";
import Head from "next/head";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountryComponent = ({ data }: { data: Country }) => {
  const { name } = data;
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Section>
        <Card data={data} />
      </Section>
    </>
  );
};

export default CountryComponent;

export async function getServerSideProps(context: { query: { code: string } }) {
  const code = context.query.code.toUpperCase();
  const query = gql`
    query getCountry($code: ID!) {
      country(code: $code) {
        name
        code
        emoji
        languages {
          code
          name
        }
      }
    }
  `;
  const data = await request("https://countries.trevorblades.com/", query, {
    code: code,
  });

  return {
    props: {
      data: data.country,
    },
  };
}
