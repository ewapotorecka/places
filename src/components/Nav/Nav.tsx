import styled from "styled-components";
import Link from "next/link";
import Home from "public/home.png";
import Image from "next/image";
import { useRouter } from "next/router";

const NavItem = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  display: flex;
  color: black;
  width: fit-content;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.nav`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background: #e9e8e8;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <Wrapper>
      <NavItem href="/" active={false}>
        <Image src={Home} alt="home" width="24" height="24" />
      </NavItem>
      <NavLinks>
        <NavItem href="/countries" active={pathName === "/countries"}>
          countries
        </NavItem>

        <NavItem href="/profile" active={pathName === "/profile"}>
          profile
        </NavItem>
      </NavLinks>
    </Wrapper>
  );
};

export default Nav;
