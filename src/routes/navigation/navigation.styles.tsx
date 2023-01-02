import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
    display: flex;
    padding: 0.5rem;
    align-items: center;
    > * {
        flex: 1;
    }
`;

export const NavigationHeader = styled.h2`
    font-family: 'Montserrat', sans-serif;
`

export const NavigationLinks = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    > * {
        font-size: 1.1rem;
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
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
    > * {
        padding: 0.7rem;
    }
`;
