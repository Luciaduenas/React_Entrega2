import React, { useEffect, useState } from "react";
import { CursiveTitle, ProducsContainer } from "../bestsellers_widget/styles"
import { Button } from "../../button/button";
import { ProductCard } from "../product_card/product_card";
import { SellersWrapper } from "./styles";
import { CategoriesFilter } from "../categories/categories";
import { useSelector } from "react-redux";


export const StoreWidget = () => {
    // let INITIAL_STATE = 3

    // const [limit, setLimit] = useState (INITIAL_STATE)
    let products = useSelector (state => state.products.products);

    // const selectedCategory = useSelector (state => state.categories.selectedCategory)

    // if (selectedCategory) {
    //     products = { [selectedCategory]: products[selectedCategory] };
    //   }

    // useEffect (() =>{
    //     setLimit(INITIAL_STATE)
    // }, [selectedCategory])

    return (
        <SellersWrapper>   
        <CategoriesFilter/>
        <ProducsContainer>
            {   
               products.map ((product) => <ProductCard key={product.id} {...product}/>)
            }

        </ProducsContainer>
        {/* { !selectedCategory && ( */}
        <div>
            <Button 
            onClick= {e => setLimit (prevLimit => prevLimit + INITIAL_STATE)}
            background = "var(--btn-gradient-secondary)" radius="0">See More</Button>
        </div> 
        
        </SellersWrapper>
    )
}

