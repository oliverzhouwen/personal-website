import { NavLink, Outlet } from "react-router-dom";

import { 
    NavigationContainer,
    NavigationHeader,
    NavigationLinks,
    NavigationLink,
    NavigationContacts
 } from "./navigation.styles";
 import NavigationContact from "../../components/NavigationContact/navigation-contact.component";

const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <NavigationHeader>OLIVER WEN Z.</NavigationHeader>
                <NavigationLinks>
                    <NavigationLink to='/' >Home</NavigationLink>
                    <NavigationLink to='/about'>About</NavigationLink>
                    <NavigationLink to='/sideprojects'>Side Projects</NavigationLink>
                </NavigationLinks>
                <NavigationContacts>
                    <NavigationContact type="Instagram"/>
                    <NavigationContact type="Linkedin"/>
                    <NavigationContact type="Email"/>
                </NavigationContacts>
            </NavigationContainer>
            <Outlet />
        </>
    )
};

export default Navigation;