import React from "react";
import { ItemsCarrinho, ItemsContainer, Remover, Image, Quantity, Value, ItemsCart, Remove } from "./itemsStyle";

export const Items = ({ name, value, quantify, image, id, removeItem }) => {
    return (
        <>
            <ItemsContainer>

                <ItemsCart>
                    <Image src={image} alt="" ></Image>
                    <p> {name}</p>
                    <Value>Valor: R${(value.toFixed(2))}</Value>
                    <Remove onClick={() => removeItem(id)}>Remover</Remove>
                </ItemsCart>
                <Quantity>quantidade: {quantify}</Quantity>
            </ItemsContainer>
        </>
    )
}
