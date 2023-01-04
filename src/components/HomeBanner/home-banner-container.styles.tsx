import styled from "styled-components";

export const HomeBannerContainer = styled.div`
    width: 80vw;
    
    > h1 {
        @media (min-width: 850px) {
            font-size: 3rem;
        }
    }

    > p {
        @media (min-width: 850px) {
            font-size: 1.2rem;
        }
    }
`;