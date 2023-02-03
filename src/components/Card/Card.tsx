import { Country } from "@/gql/graphql";
import Link from "next/link";
import styled from "styled-components";
interface CardProps {
  name: string;
  code: string;
  emoji: string;
  languages: { name?: string; code: string }[];
}

const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

const Section = styled.section`
  padding: 4rem 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #e9e8e8;
  width: fit-content;
  color: black;
  padding: 2rem;
  gap: 1rem;
`;

const Label = styled.div`
  display: flex;
  padding: 0.125rem 0.25rem;
  align-items: center;
  gap: 0.25rem;
`;

const Code = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const LanguagesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Card = ({ data }: { data: Country }) => {
  const { name, emoji, code, languages } = data;
  return (
    <Container>
      <Header>
        <h1>{name}</h1>
        <Label>
          <p>{emoji}</p>
          <Code>{code}</Code>
        </Label>
      </Header>
      <LanguagesContainer>
        <p>Languages:</p>
        {languages.length === 0 && <span>none</span>}
        {languages.map((lang, idx) => (
          <span key={lang.code}>{`${lang.name}${
            idx < languages.length - 1 && languages.length > 1 ? "," : ""
          }`}</span>
        ))}
      </LanguagesContainer>
    </Container>
  );
};
