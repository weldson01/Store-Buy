import { Heart } from "phosphor-react";
import styled from "styled-components";
import { useLikedItems } from "../../../shared/hooks/LikedItems";
import { ILikedItems } from "../../contexts/LikedItemsContext";

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

export const Card = ({ title, description, image, id, liked }: ILikedItems) => {
  const { likedItems, setLikedItems } = useLikedItems();

  const handleFavorite = () => {
    setLikedItems((prev: ILikedItems[]) => {
      if (
        likedItems.some((item: ILikedItems) => {
          return item.id === id;
        })
      ) {
        let newItems: ILikedItems[] = [];

        likedItems.forEach((item: ILikedItems) => {
          if (item.id !== id) {
            newItems.push(item);
          }
        });
        console.log(newItems);
        return newItems;
      } else {
        return [...prev, { id, title, description, image, liked }];
      }
    });
  };
  return (
    <StCard key={id}>
      <div className="title">
        <h3>
          {title}
          {liked}
        </h3>
      </div>
      <img src={image} alt={title} />
      <p>{description}</p>
      <div className="action">
        <button onClick={handleFavorite}>
          {liked ? <Heart weight="fill" /> : <Heart weight="bold" />}
        </button>
      </div>
    </StCard>
  );
};
