import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 8rem;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary);
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-black)" : "var(--color-secondary)"};
  font-size: 2rem;

  &:hover {
    color: var(--color-black);
  }
`;

const StyledNav = styled.nav`
  position: fixed;
  bottom: 3rem;
  width: 100%;
  background-color: var(--color-white);
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNav>
      <StyledList>
        <li>
          <StyledLink
            href="/gallery"
            $isActive={router.pathname === "/gallery"}
          >
            Overview
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/" $isActive={router.pathname === "/"}>
            Böker & Juppe
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="/favorites"
            $isActive={router.pathname === "/favorites"}
          >
            Favorites
          </StyledLink>
        </li>
      </StyledList>
    </StyledNav>
  );
}
