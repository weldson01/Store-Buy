import styled from "styled-components";
import { LinkButton } from "./components/LinkButton";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  width: 100%;
  height: 5rem;
  color: #fff;
  background-color: #222;

  h1 {
    font-size: 2.2rem;
    font-family: "Times New Roman", Times, serif;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="title">
        <h1>Store Buy</h1>
      </div>
      <nav>
        <LinkButton to="/" label="Home" />
        <LinkButton to="/products" label="Produtos" />
        <LinkButton to="/liked" label="Interesse" />
      </nav>
    </StyledHeader>
  );
};
