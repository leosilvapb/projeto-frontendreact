import React from "react";
import { FilterContainer, Input, Titulo } from "./filterStyle";

export const Filter = () => {
    return (
        <FilterContainer>
            <Titulo>Filtros</Titulo>
            <p>Valor mínimo:</p>
            <Input type="number"></Input>
            <p>Valor máximo:</p>
            <Input type="number"></Input>
            <p>Busca por nome:</p>
            <Input type="text"></Input>
        </FilterContainer>
    )
}

