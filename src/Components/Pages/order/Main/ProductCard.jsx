import styled from "styled-components";
import { theme } from "../../../../theme";
import {formatPrice} from "../../../../utils/maths";
export default function ProductCard({ title, imageSource, price }) {
  return (
    <ProductCardStyled>
      <div className="image">
        <img src={imageSource} alt={title} className="menu-image" />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{formatPrice(price)}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`
  background: ${theme.colors.background_light};
  width: 240px;
  height: 330px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  box-sizing: border-box;
  gap: 40px;

  .image {
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: contain;
    .menu-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .info-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .title {
      font-weight: bold;
      font-size: 1.2em;
      font-family: "amatic sc", cursive;
    }
    .description {
      padding:0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-weight: bold;
        color: ${theme.colors.primary};
      }
      .add-button {
        padding: 10px 25px;
        border: none;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.primary};
        color: white;
        font-weight: bold;
      }
    }
  }
`;
