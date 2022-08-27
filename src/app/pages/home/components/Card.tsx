import { Heart } from "phosphor-react";
import styled from "styled-components";
import { useLikedItems } from "../../../shared/hooks/LikedItems";

const StCard = styled.div`
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    visibility: hidden;
  }
  ::-webkit-scrollbar-thumb {
    width: 0.4rem;
    border-radius: 10px;
  }
  font-family: sans-serif;
  box-sizing: border-box;
  width: 20rem;
  height: 35rem;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  align-items: center;
  gap: 1rem;
  &:active {
    outline: 5px solid #444;
  }
  .title {
    font-size: 1.1rem;
    min-width: 100%;
    height: 6rem;
    background-color: #333;
    color: #fff;
    padding: 0.8rem;
    text-align: center;
  }
  img {
    width: 18rem;
    height: 40%;
  }
  p {
    text-align: center;
    padding: 0 1rem;
    height: 7.2rem;
    overflow-y: scroll;
  }
  .action {
    height: 3rem;
    button {
      background: transparent;
      border: none;
      outline: none;
      svg {
        font-size: 2rem;
        color: rgba(200, 10, 20);
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;

interface ICardProps {
  title: string;
  description: string;
  image: string;
}

export const Card = ({ title, description, image }: ICardProps) => {
  const { likedItems, setLikedItems } = useLikedItems();

  const handleFavorite = () => {
    setLikedItems((prev: any) => {
      return [...prev, { title, description, image }];
    });
  };
  return (
    <StCard>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <img src={image} alt={title} />
      <p>{description}</p>
      <div className="action">
        <button onClick={handleFavorite}>
          <Heart />
        </button>
      </div>
    </StCard>
  );
};
