import styled from "styled-components";

export const ModalContentContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    @media (min-width: 851px) {
        grid-template-columns: 2fr 1fr;
    }
`;

export const ModalContentInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 851px) {
        padding-top: 2rem;
        padding-right: 4rem;
        gap: 1rem;

        .title {
            font-size: 2rem;
        }

        .locationTag {
            font-weight: bold;
            font-size: 1.2rem;
        }

        .locationInfo {
            font-size: 1.2rem;
        }
        
    }

    @media (max-width: 850px) {
        padding: 1rem;

        .title {
            font-size: 1.5rem;
        }

        .locationTag {
            font-weight: bold;
        }
    }
`;

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