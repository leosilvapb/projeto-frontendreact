import React from "react";
import { ProductCards } from "../ProductCard/ProductCard";
import { Cabecalho, Cards, HomeContainer, Label } from "./homeStyle";

export const Home = () => {
    return (
        <>
            <HomeContainer>
                <Cabecalho>
                    <p>Quantidade de produtos:</p>
                    <Label>
                        Ordenar:
                        <select>
                            <option>Decrescente</option>
                            <option>Crescente</option>
                        </select>
                    </Label>
                </Cabecalho>
                <Cards>
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                </Cards>
            </HomeContainer>
        </>
    )
}

