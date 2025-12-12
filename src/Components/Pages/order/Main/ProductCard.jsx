import styled from "styled-components";
import { theme } from "../../../../theme";

export default function ProductCard({ title, imageSource, price }) {
  return (
    <ProductCardStyled>
      <div className="menu-item">
        <img src={imageSource} alt={title} className="menu-image" />
        <h2 className="menu-title">{title}</h2>
        <div className="menu-footer">
          <p className="price">${price.toFixed(2)}</p>
          <button>Ajouter</button>
        </div>
      </div>
    </ProductCardStyled>
  );
}

const ProductCardStyled = styled.div`

        .menu-item{
        display:flex;
        height:400px;
        flex-direction:column;
        align-items:center;
        background:#F5F5F7;

        border-radius: ${theme.borderRadius.extraRound};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
        justify-content:center;
          padding:15px;
        }
        .menu-image{
          width:100%;
          height:100%;
          object-fit:contain;
        }
        .menu-title{
          font-size: 16px;
          color:black;
        }
        .menu-footer{
            width:100%; 
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:0 10px;
            .price{
                font-weight:bold;
                color:${theme.colors.primary};
            }
        }
            button{
                background:${theme.colors.primary};
                color:white;
                border:none;
                padding:10px 15px;
                border-radius: ${theme.borderRadius.round};
                cursor:pointer;

`;