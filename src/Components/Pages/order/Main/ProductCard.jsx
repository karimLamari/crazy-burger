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
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0 rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 18px;
  box-sizing: border-box;

  .image {
    width:200px;
    height:145px;
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
    padding: 0 5px 5px 5px;
    gap: 10px;

    .title {
      font-weight: bold;
      font-size: 36px;;
      font-family: "amatic sc", cursive;
    }
    .description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-weight: 400;
        color: ${theme.colors.primary};
        font-size: 16px;

      }
      .add-button {
        padding: 10px 25px;
        border: 1px solid ${theme.colors.primary_burger};
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.primary_burger};
        color: white;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
      }
    }
  }
`;
