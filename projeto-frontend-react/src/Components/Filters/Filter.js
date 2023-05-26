import React from "react";
import { FilterContainer, Input, Titulo } from "./filterStyle";

export const Filter = ({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter
}) => {
    const handleMinFilter = (e) => {
        if (e.target.value < 0) {
            alert("Digite valores acima de zero!")
            setMinFilter(0)
        } else {
            setMinFilter(e.target.value)
        }
    }
    const handleMaxFilter = (e) => {
        if (e.target.value < 0) {
            alert("Digite valores acima de zero!")
            setMaxFilter(0)
        } else {
            setMaxFilter(e.target.value)
        }
    }
    const handleSearchFilter = (e) => {
        setSearchFilter(e.target.value)
    }
    return (
        <FilterContainer>
            <Titulo>Filtros</Titulo>
            <p>Valor mínimo:</p>
            <Input type="number" value={minFilter} onChange={handleMinFilter}></Input>
            <p>Valor máximo:</p>
            <Input type="number" value={maxFilter} onChange={handleMaxFilter}></Input>
            <p>Busca por nome:</p>
            <Input type="text" value={searchFilter} onChange={handleSearchFilter}></Input>
        </FilterContainer>
    )
}

