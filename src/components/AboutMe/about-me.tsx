import { AboutMeContainer } from "./about-me.styles";
import SelfImage from "../../assets/img_avatar.png"

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <div className="self-image-container">
                <img className="self-image" src={SelfImage}/>
            </div>
            <div className="self-introduction">
                <h1>Hello! My name is Oliver and I'm a Software Quality Engineer. 🔧</h1>
                <p>I graduated from <u>University of Sydney</u> with a Bachelor's Degree in Electrical Engineering. My first job after graduating from university was software automation engineer and since then I have been working as a software tester for three years. I have a passion for front-end development. This personal website is a project of mine built using React. When I'm not working, you can find me lying on my couch, napping. <br /> Below are my contact information and my past job experience. Thank you for stopping by! </p>
            </div>
        </AboutMeContainer>
    )
};

export default AboutMe;