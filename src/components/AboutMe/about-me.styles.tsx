import styled from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    width: 80vw;
    align-items: center;
    .self-image {
        border-radius: 50%;
        width: 16rem;
        height: 16rem;
        display: block;
    }
    
    @media(min-width: 850px) {
        .self-image-container {
            width: 35%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .self-introduction {
           width: 65%;
           > p {
            font-size: 1rem;
           }
        }
    }


    @media(max-width: 850px) {
        flex-direction: column;
        .self-introduction {
            > h1 {
                font-size: 1.3rem;
            }
        }
    }
`;