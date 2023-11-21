import React from "react";
import { CursiveTitle, ProducsContainer } from "../bestsellers_widget/styles"
import { Button } from "../../button/button";
import { ProductCard } from "../product_card/product_card";
import { SellersWrapper } from "./styles";
import { products } from "../../../data/products/products";
import { CategoriesFilter } from "../categories/categories";


export const StoreWidget = () => {
    return (
        <SellersWrapper>   
        <CategoriesFilter/>
        <ProducsContainer>
            {   
               products.map ((product) => <ProductCard key={product.id} {...product}/>)
            }

        </ProducsContainer>
        <div>
            <Button background = "var(--btn-gradient-secondary)" radius="0">See More</Button>
        </div>
        </SellersWrapper>
    )
}

