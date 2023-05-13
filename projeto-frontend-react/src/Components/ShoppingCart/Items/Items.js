import React from "react";
import { ItemsCarrinho, ItemsContainer, Remover, Titulo, TituloCarrinho } from "./itemsStyle";

export const Items = () => {
    return (
        <>
            <ItemsContainer>
                <TituloCarrinho> Carrinho</TituloCarrinho>
                <ItemsCarrinho>
                    <p>x0 Nome do Produto</p>
                    <Remover>Remover</Remover>
                </ItemsCarrinho>
                <p>Valor Total: 0</p>
            </ItemsContainer>
        </>
    )
}
