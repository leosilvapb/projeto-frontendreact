import React from "react";
import { AddCarrinho, ImagemCard, InfoProduct, ProductCardContainer } from "./productCardStyle";

export const ProductCards = ({ productList, addForCart }) => {

    return (
        <>
            <ProductCardContainer>
                <ImagemCard>
                    <img src={productList.imageUrl} />
                </ImagemCard>
                <InfoProduct>{productList.name}</InfoProduct>
                <InfoProduct>{productList.value}</InfoProduct>
                <AddCarrinho onClick={() => addForCart(productList)}>Adicionar ao Carrinho</AddCarrinho>
            </ProductCardContainer>
        </>
    )
}
