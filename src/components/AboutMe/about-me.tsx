import { AboutMeContainer } from "./about-me.styles";
import SelfImage from "../../assets/Personal_Avatar.jpg"

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <div className="self-image-container">
                <img className="self-image" src={SelfImage} alt="self-avatar" />
            </div>
            <div className="self-introduction">
                <h1>Hello! My name is Oliver and I'm a Software Quality Engineer. 🔧</h1>
                <p>
                    I graduated from <u>University of Sydney</u> with a Bachelor's Degree in Electrical Engineering.
                </p>
                <p>
                    My initial role post-graduation was as a software automation engineer, and for the past three years, I've been engaged in software testing.
                </p>
                <p>
                    I hold a strong interest in front-end development. This personal website is a React-based project of mine. During my off-hours, you'll likely find me napping on my couch.
                </p>
                <p>
                    Below, you'll find my contact details and a rundown of my previous job experiences. Thank you for visiting!
                </p>
            </div>
        </AboutMeContainer>
    )
};

export default AboutMe;