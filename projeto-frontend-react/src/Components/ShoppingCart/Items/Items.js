import React from "react";
import { ItemsCarrinho, ItemsContainer, Remover, Image } from "./itemsStyle";

export const Items = ({ name, value, quantify, image, id, removeItem }) => {
    return (
        <>
            <ItemsContainer>

                <ItemsCarrinho>
                    <Image src={image} alt="" ></Image>
                    <p> {name}</p>
                    <p>Valor: R${(value.toFixed(2))}</p>
                    <Remover onClick={() => removeItem(id)}>Remover</Remover>
                </ItemsCarrinho>
                <p>quantidade: {quantify}</p>
            </ItemsContainer>
        </>
    )
}
