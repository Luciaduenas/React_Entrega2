import React from "react";
import { CategoriesWidget, CategoriesContainer, StyledCategoryButton } from "./styles";
import { CategoryButton } from "./categoryButton";
import { useSelector } from "react-redux";

export const CategoriesFilter = () => {
  const categories = useSelector (state => state.categories.categories)
    return ( 
        <CategoriesWidget>
            <h3>Search by category:</h3>
            <CategoriesContainer>
            {   
               categories.map ((category, i) => <CategoryButton {...category} key={i}/>)
            }
            </CategoriesContainer>
        </CategoriesWidget>
    )
}
