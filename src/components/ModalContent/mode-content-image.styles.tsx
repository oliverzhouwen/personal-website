import styled from "styled-components";

export const ModelContentImage = styled.img`

    @media (min-width: 851px) {
        grid-column-start: 1;
        grid-column-end: 2;
        width: 70%;
        max-height: 70vh;
        object-fit: cover;
        justify-self: center;
        align-self: center;
        border-top-left-radius: 20%;
        border-bottom-right-radius: 20%
    }
    @media (max-width: 850px) {
        width: 100%;
        object-fit: cover;
    }
`;