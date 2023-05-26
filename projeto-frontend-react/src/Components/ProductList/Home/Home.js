import React from "react";
import { ProductCards } from "../ProductCard/ProductCard";
import { HeaderHome, Cards, HomeContainer, Label, QuantProducts } from "./homeStyle";
import { useState } from "react";


export const Home = ({ productList, cart, setCart, amount, setAmount, }) => {
    const [ordination, setOrdination] = useState("")

    const handleSelect = (e) => {
        setOrdination(e.target.value)
    }

    const addToCart = (products) => {
        {/*pega as informações da lista de produtos*/ }
        const newProduct = cart.find((productCallBack) => products.id === productCallBack.id) //CallBack = funcação que recebe outra função
        if (newProduct === undefined) {
            products = { ...products, quantify: 1 }
            setCart([...cart, products])
            const valueTotal = amount + products.value
            setAmount(valueTotal)
        } else {
            const newCart = cart.map((products) => {
                if (products.id === newProduct.id) {
                    const valueTotal = amount + products.value
                    setAmount(valueTotal)
                    return { ...newProduct, quantify: newProduct.quantify + 1 }
                } else {
                    return products
                }
            })
            setCart(newCart)
        }
    }
    console.log(amount);
    return (
        <>
            <HomeContainer>
                <HeaderHome>
                    {/* PEGA O TOTAL DO ARRAY E MOSTRA A QUANTIDADE DE PRODUTOS QUE TEM NO ARRAY */}
                    <QuantProducts>Quantidade de produtos: {productList.length} </QuantProducts>
                    <Label>
                        Ordenar:
                        <select
                            value={ordination}
                            onChange={handleSelect}
                        >
                            <option disabled>Selecione</option>
                            <option>Decrescente</option>
                            <option>Crescente</option>
                        </select>
                    </Label>
                </HeaderHome>
                <Cards>
                    {/* <ProductCards /> chamada do componente sem o uso do map */}
                    {
                        productList.map((product) => {
                            return <ProductCards
                                productList={product}
                                key={product.id}
                                addForCart={addToCart} /> //Chamanda do componente com map

                        })
                    }
                </Cards>
            </HomeContainer>
        </>
    )
}

