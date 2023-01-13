import styled from "styled-components";

export const LoaderContainer = styled.div`
    color: white;
    background-color: blue;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: opacity 0.75s, visibility 0.75s;

    ::after {
        content: "";
        width: 75px;
        height: 75px;
        border: 15px solid #dddddd;
        border-top-color: #333333;
        border-radius: 50%;
        animation: loading 0.75s ease infinite;
    }

    @keyframes loading {
        from { transform: rotate(0turn) }
        to { transform: rotate(1turn) }
    }
`;