import React from "react";
import { AddCarrinho, ImagemCard, Images, InfoProduct, ProductCardContainer } from "./productCardStyle";

export const ProductCards = ({ productList, addForCart }) => {

    return (
        <>
            <ProductCardContainer>
                <ImagemCard>
                    <Images src={productList.imageUrl} />
                </ImagemCard>
                <InfoProduct>{productList.name}</InfoProduct>
                <InfoProduct>R$ {productList.value}</InfoProduct>
                <AddCarrinho onClick={() => addForCart(productList)}>Adicionar ao Carrinho</AddCarrinho>
            </ProductCardContainer>
        </>
    )
}
