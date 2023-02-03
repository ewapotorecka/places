import Nav from "@/components/Nav/Nav";
import { CountryLink } from "@/pages/countries";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import styled from "styled-components";

const GET_PROFILE_COUNTRY = gql`
  query GetProfileCountry($code: ID!) {
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  align-items: flex-end;
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE_COUNTRY, {
    variables: {
      code: "PL",
    },
  });

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Section>
        {loading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>Error</span>
        ) : (
          <CountryLink country={data.country} />
        )}
      </Section>
    </>
  );
};

export default Profile;
