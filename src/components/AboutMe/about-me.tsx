import { AboutMeContainer } from "./about-me.styles";
import SelfImage from "../../assets/Personal_Avatar.jpg"

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <div className="self-image-container">
                <img className="self-image" src={SelfImage} alt="self-avatar"/>
            </div>
            <div className="self-introduction">
                <h1>Hello! My name is Oliver and I'm a Software Quality Engineer. 🔧</h1>
                <p>
                    I graduated from <u>University of Sydney</u> with a Bachelor's Degree in Electrical Engineering. 
                </p>
                <p>
                    My first job after graduating from university was software automation engineer and since then I have been working as a software tester for three years. 
                </p>
                <p>
                    I have a passion for front-end development. This personal website is a project of mine built using React. When I'm not working, you can find me on my couch, napping.
                </p>
                <p>
                    Below are my contact information and my past job experience. Thank you for stopping by!
                </p>
            </div>
        </AboutMeContainer>
    )
};

export default AboutMe;