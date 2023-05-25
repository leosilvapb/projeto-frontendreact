import React from "react";
import { Items } from "../Items/Items";
import { CartContainer } from "./cartStyle";

export const Cart = () => {

    return (
        <>
            <CartContainer>
                <Items />
            </CartContainer>
        </>
    )
}
