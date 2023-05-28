import React from "react";
import { ItemsCarrinho, ItemsContainer, Remover, Image, Quantity, Value } from "./itemsStyle";

export const Items = ({ name, value, quantify, image, id, removeItem }) => {
    return (
        <>
            <ItemsContainer>

                <ItemsCarrinho>
                    <Image src={image} alt="" ></Image>
                    <p> {name}</p>
                    <Value>Valor: R${(value.toFixed(2))}</Value>
                    <Remover onClick={() => removeItem(id)}>Remover</Remover>
                </ItemsCarrinho>
                <Quantity>quantidade: {quantify}</Quantity>
            </ItemsContainer>
        </>
    )
}
