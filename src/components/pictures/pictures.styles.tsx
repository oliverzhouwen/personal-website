import styled from "styled-components";

export const PictureCardsContainer = styled.div`
    display: grid;
    height: 80vw;
    width: 80vw;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
`;

export const PictureCard = styled.img`
    box-sizing: border-box;
    padding: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;