import styled from "styled-components";

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