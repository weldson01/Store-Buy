import styled from "styled-components";

const WrapperCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = ({ children }: any) => {
  return <WrapperCards>{children}</WrapperCards>;
};
