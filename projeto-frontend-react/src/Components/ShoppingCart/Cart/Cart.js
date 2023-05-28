import React from "react";
import { Items } from "../Items/Items";
import { CartContainer, TituloCarrinho, ValorTotal } from "./cartStyle";

export const Cart = ({ cart, amount, setAmount, setCart }) => {
    const removeItem = (id) => {
        cart.map((products) => {
            if (products.id === id && products.quantify >= 1) {
                products.quantify = products.quantify - 1
                setCart([...cart])
                setAmount(amount - products.value)
            }

            if (products.quantify === 0) {
                const newCart = cart.filter((products) => products.quantify !== 0)
                setCart(newCart)
            }
        })
    }
    return (
        <>
            <CartContainer>
                <TituloCarrinho> Carrinho </TituloCarrinho>
                {cart.map((products) => {
                    return <Items
                        key={products.id}
                        name={products.name}
                        value={products.value * products.quantify}
                        image={products.imageUrl}
                        quantify={products.quantify}
                        id={products.id}
                        removeItem={removeItem}
                    />


                })}
                <ValorTotal>Valor Total: R${amount.toFixed(2)}</ValorTotal>
            </CartContainer>
        </>
    )
}
