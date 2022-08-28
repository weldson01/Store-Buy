import { Link } from "react-router-dom";
import styled from "styled-components";

interface ILinkButtonProps {
  type?: "normal" | "onPage";
  to: string;
  label: string;
}

export const LinkButton = ({ to, label, ...props }: ILinkButtonProps) => {
  const StyledButton = styled.div`
    display: inline;
    a {
      font-size: 1rem;
      color: #fff;
      padding: 1rem 2rem;
      border: 2px solid #333;
      ${props?.type == "onPage"
        ? "background-color:transparent "
        : "background-color: #333"}
    }
  `;

  return (
    <StyledButton>
      <Link to={to}>{label}</Link>
    </StyledButton>
  );
};
