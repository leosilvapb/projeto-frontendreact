import React from "react";
import { AddCarrinho, ImagemCard, InfoProduct, ProductCardContainer } from "./productCardStyle";

export const ProductCards = ({ productList }) => {
    console.log(productList);
    return (
        <>
            <ProductCardContainer>
                <ImagemCard>
                    <img src={productList.imageUrl} />
                </ImagemCard>
                <InfoProduct>{productList.name}</InfoProduct>
                <InfoProduct>{productList.value}</InfoProduct>
                <AddCarrinho>Adicionar ao Carrinho</AddCarrinho>
            </ProductCardContainer>
        </>
    )
}
