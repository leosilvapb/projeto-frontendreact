import React from "react";
import { ProductCards } from "../ProductCard/ProductCard";
import { Cabecalho, Cards, HomeContainer, Label } from "./homeStyle";


export const Home = ({ productList }) => {
    return (
        <>
            <HomeContainer>
                <Cabecalho>
                    <p>Quantidade de produtos: {productList.length} </p>
                    <Label>
                        Ordenar:
                        <select>
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

