import styled from "styled-components";

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    @media (max-width:768px) {
        flex-direction: column ;
    }
`