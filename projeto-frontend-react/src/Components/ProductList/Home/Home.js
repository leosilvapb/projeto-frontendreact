import React from "react";
import { ProductCards } from "../ProductCard/ProductCard";
import { Cabecalho, Cards, HomeContainer, Label } from "./homeStyle";
import { useState } from "react";


export const Home = ({ productList, cart, setCart, amount, setAmount, }) => {
    const [ordination, setOrdination] = useState("")

    const handleSelect = (e) => {
        setOrdination(e.target.value)
    }
    return (
        <>
            <HomeContainer>
                <Cabecalho>
                    <p>Quantidade de produtos: {productList.length} </p>
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
                </Cabecalho>
                <Cards>
                    <ProductCards productList={productList[0]} />
                    <ProductCards productList={productList[1]} />
                    <ProductCards productList={productList[2]} />
                    <ProductCards productList={productList[3]} />

                </Cards>
            </HomeContainer>
        </>
    )
}

