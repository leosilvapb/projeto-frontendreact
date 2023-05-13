import React from "react";
import { AddCarrinho, Foto, InfoProduct, ProductCardContainer } from "./productCardStyle";

export const ProductCards = () => {
    return (
        <>
            <ProductCardContainer>
                <Foto>ProductCards</Foto>
                <InfoProduct>Nome do Produto</InfoProduct>
                <InfoProduct>valor</InfoProduct>
                <AddCarrinho>Adicionar ao Carrinho</AddCarrinho>
            </ProductCardContainer>
        </>
    )
}
