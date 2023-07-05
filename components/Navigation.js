import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link href="/">Spotlight</Link>
      <Link href="/art_pieces">Art pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </StyledNavigation>
  );
}
const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  a {
    text-decoration: none;
    padding: 1rem 2rem;
    border: 1px solid black;
    background-color: lavender;
    font-weight: bold;
    width: 100%;
    &:hover {
      color: white;
      background-color: violet;
    }
  }
`;
