import React, { useEffect } from "react";
import { ProductCards } from "../ProductCard/ProductCard";
import { HeaderHome, Cards, HomeContainer, Label, QuantProducts } from "./homeStyle";
import { useState } from "react";


export const Home = ({ productList, cart, setCart, amount, setAmount, stateOrdination, setStateOrdanition, initialList, setInitialList }) => {
    const [ordination, setOrdination] = useState("")

    const handleSelect = (e) => {
        setOrdination(e.target.value)
    }

    useEffect(() => {
        stateOrdination.sort((a, b) => {
            if (ordination === "Decrescente") {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
            } else if (ordination === "Crescente") {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
            }
        });
        initialList.sort((a, b) => {
            if (ordination === "Decrescente") {
                if (a.name < b.name) {
                    return 1
                }
                if (a.name > b.name) {
                    return -1
                }
            }
            else if (ordination === "Crescente") {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
            }
        })
        setStateOrdanition([...stateOrdination])
        setInitialList([...initialList])

    }, [ordination])


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



    return (
        <>
            <HomeContainer>
                <HeaderHome>
                    {/* PEGA O TOTAL DO ARRAY E MOSTRA A QUANTIDADE DE PRODUTOS QUE TEM NO ARRAY */}
                    <QuantProducts>Quantidade de produtos: {stateOrdination.length} </QuantProducts>
                    <Label>
                        Ordenar:
                        <select
                            value={ordination}
                            onChange={handleSelect}
                        >
                            <option value="" disabled>Selecione</option>
                            <option value="Decrescente" >Decrescente</option>
                            <option value="Crescente" >Crescente</option>
                        </select>
                    </Label>
                </HeaderHome>
                <Cards>
                    {/* <ProductCards /> chamada do componente sem o uso do map */}
                    {
                        stateOrdination.map((product) => {
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

