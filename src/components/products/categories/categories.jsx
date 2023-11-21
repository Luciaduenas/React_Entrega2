import React from "react";
import { Button } from "../../button/button";
import { CategoriesContainer } from "./styles";

export const CategoriesFilter = () => {
    return ( 
        <CategoriesContainer>
            <Button radius= "0" background = "var(  --softpink)">Accesories</Button>
            <Button radius= "0" background = "var(  --softpink)">Bags</Button>
            <Button radius= "0" background = "var(  --softpink)">Satationary</Button>
        </CategoriesContainer>

    )
}
