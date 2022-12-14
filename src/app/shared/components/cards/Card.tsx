import { Heart, ShoppingCart } from "phosphor-react";
import styled from "styled-components";
import { useLikedItems } from "../../../shared/hooks/LikedItems";
import { useCartItems } from "../../hooks/CartItems";
import { IItemsAPI } from "../../types";

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
  width: 18rem;
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
    width: 100%;
    height: 6rem;
    background-color: #333;
    color: #fff;
    padding: 0.8rem;
    text-align: center;
  }
  img {
    width: 18rem;
    height: 40%;
    padding: 0 0.5rem;
  }
  p {
    text-align: center;
    padding: 0 1rem;
    height: 8rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      position: absolute;
      right: 5px;
      width: 0.8rem;
      background-color: #999;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #333;
      border-radius: 5px;
    }
  }
  .action {
    height: 3rem;
    display: flex;
    flex-flow: row nowrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
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

export const Card = ({
  title,
  description,
  image,
  id,
  liked = false,
}: IItemsAPI) => {
  const { likedItems, setLikedItems } = useLikedItems();
  const { cart, setCart } = useCartItems();

  const handleSetCard = () => {
    setCart((prevCart: IItemsAPI[]) => {
      if (
        cart.some((item: IItemsAPI) => {
          item.id == id;
        })
      ) {
        let newCart: IItemsAPI[] = [];
        cart.map((item: IItemsAPI) => {
          if (item.id != id) {
            newCart.push(item);
          }
        });
        return newCart;
      }
      return [...prevCart, { title, description, image, id, liked }];
    });
  };
  const handleFavorite = () => {
    setLikedItems((prev: IItemsAPI[]) => {
      if (
        likedItems.some((item: IItemsAPI) => {
          return item.id === id;
        })
      ) {
        let newItems: IItemsAPI[] = [];

        likedItems.forEach((item: IItemsAPI) => {
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
          {`${title.slice(0, 40)} ${title.length > 40 && "..."}`}
          {liked}
        </h3>
      </div>
      <img src={image} alt={title} />
      <p>{description}</p>
      <div className="action">
        <button onClick={handleSetCard}>
          {cart.some((item: any) => {
            item.id == id;
          }) ? (
            <ShoppingCart weight="fill" />
          ) : (
            <ShoppingCart weight="bold" />
          )}
        </button>
        <button onClick={handleFavorite}>
          {liked ? <Heart weight="fill" /> : <Heart weight="bold" />}
        </button>
      </div>
    </StCard>
  );
};
