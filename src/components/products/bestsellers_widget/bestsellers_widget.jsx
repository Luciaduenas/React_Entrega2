import React from "react";
import { BestSellersWrapper, CursiveTitle, ProducsContainer } from "./styles";
import { Button } from "../../button/button";
import { popularProducts } from "../../../data/products/products";
import { ProductCard } from "../product_card/product_card";
import { Link } from "react-router-dom";


export const BestsellersWidget = () => {
    return (
        <BestSellersWrapper>   
        <CursiveTitle>Most Popular items</CursiveTitle>
        <ProducsContainer>
            {   
                popularProducts.map ((popularProduct) => <ProductCard key={popularProduct.id} {...popularProduct}/>)
            }

        </ProducsContainer>

        <div>
            <Button background = "var(--btn-gradient-secondary)" radius="0" >
                <Link to="/store" >Go to store</Link>
                </Button>
        </div>
        </BestSellersWrapper>
    )
}   