import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    position: sticky;
    top: 0;
    background: white;
    display: flex;
    @media (min-width: 851px) {
        padding: 2rem;
        align-items: center;
        > * {
            flex: 1;
        }
    }
    @media (max-width: 850px) {
        width: 100vw;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    margin-bottom: 2rem;
`;

export const NavigationHeader = styled(Link)`
    font-family: 'Caveat', cursive;
    font-size: 2rem;
    text-decoration: none;
    color: black;
`;

export const NavigationLinks = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    /* justify-content: space-around; */
    flex-direction: row;
    > * {
        font-weight: 500;
        font-size: 1.1rem;
        text-align: center;
        flex: 1;
    }
    @media (max-width: 850px) {
        width: 100%
    }
    
`;

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    &.active {
        text-decoration: underline
    }
    color: black;
`

export const NavigationContacts = styled.div`

    @media (min-width: 850px) {
        display: flex;
        justify-content: flex-end;
    }
    padding: 0;
    margin: 0;
    > * {
        padding: 0.7rem;
    }
`;
