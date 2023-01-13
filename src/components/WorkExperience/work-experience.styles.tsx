import styled from "styled-components";

export const WorkExperienceContainer = styled.div`
    font-family: Roboto Slab, serif;
    border-top: 1px solid #A1B0AB;
    width: 100vw;

    @media(min-width: 851px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        > * {
            padding: 5rem;
        }
    }

    @media(max-width: 850px) {
        > * {
            padding: 1.5rem;
        }
    }

    @media(max-width: 850px) {
        display: flex;
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    
    border-right: 1px solid #A1B0AB;
    color: #b2b2b2;
    background-color: #1f2833;

    .contact-info-container {

        @media(max-width: 850px) {
            li {
            display: flex;
                > * {
                    margin: 0;
                }
            }

            .contact-method {
                width: 4rem;
            }
        }

        @media(min-width: 851px) {
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            position: sticky;
            top: 28vh;
        }

        > h2 {
            color: white
        }

        > ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
    };
`;

export const RightContainer = styled.div`
    .past-jobs {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
`;

export const Divider = styled.div`
    width: 50%;
    border-top: 5px solid ${props => props.color};
    border-radius: 10px;
    margin: 0;
    margin: 0 0 1rem 0;
`;

export const JobCardContainer = styled.div`
    :not(:last-child) {
        border-bottom: 1px solid #A1B0AB;
    }

    .position {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    .position-info {
        display: flex;
        padding-bottom: 1rem;
    }
    
    .company {
        flex: 1;
        display: flex;

        > img {
            width: 100px;
            object-fit: contain;
        }
    }

    .time-and-location {
        margin: 0;
        flex: 2;
        text-align: end;

        @media(max-width: 850px) {
            flex: 1.5;
        }

        > p {
            margin: 0
        }
    }

    .description {
        color: #a2a2a2;
    }
`;