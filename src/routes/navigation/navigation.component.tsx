import { Outlet } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { IconContext } from "react-icons";

import {
    NavigationContainer,
    NavigationHeader,
    NavigationLinks,
    NavigationLink,
    NavigationContacts
} from "./navigation.styles";

const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <NavigationHeader to="/">OLIVER WEN Z.</NavigationHeader>
                <NavigationLinks>
                    <NavigationLink to='/' >Home</NavigationLink>
                    <NavigationLink to='/about'>About</NavigationLink>
                </NavigationLinks>
                <NavigationContacts>
                    <IconContext.Provider value={{ size: '1.2rem' }}>
                        <a href="https://www.instagram.com/ollieezhou/" style={{ color: 'black' }} target="_blank" rel="noreferrer"><BsInstagram /></a>
                        <a href="https://www.linkedin.com/in/oliverzhou1/" style={{ color: 'black' }} target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/oliverzhouwen" style={{ color: 'black' }} target="_blank" rel="noreferrer"><BsGithub /></a>
                    </IconContext.Provider>
                </NavigationContacts>
            </NavigationContainer>
            <Outlet />
        </>
    )
};

export default Navigation;