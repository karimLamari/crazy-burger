import { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function Menu({ menus }) {

  return (
    <MenuStyled>
        {
        menus.map((item)=>(
            <ProductCard key={item.title} title={item.title} imageSource={item.imageSource} price={item.price} />
        ))
        }

    </MenuStyled>
  )
}
const MenuStyled=styled.div`
        display:grid;
        grid-template-columns : repeat(4, 1fr);
        gap:50px;
        padding:50px;

    
`;