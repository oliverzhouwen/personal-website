import InstagramIcon from '../../assets/instagram.png';
import LinkedinIcon from '../../assets/linkedin.png';
import EmailIcon from '../../assets/mail.png';


type propsType = {
    type: string
};

const iconPath = (type: string) => {
    switch(type) {
        case 'Instagram':
            return InstagramIcon;
        case 'Linkedin':
            return LinkedinIcon;
        case 'Email':
            return EmailIcon;
    }
}

const NavigationContact = ({ type }: propsType) => {
    return (
        <img src={iconPath(type)} style={{height: '20px'}}/>
    )
};

export default NavigationContact;