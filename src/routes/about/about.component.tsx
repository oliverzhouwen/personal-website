import { AboutContainer } from "./about.styles";
import AboutMe from "../../components/AboutMe/about-me";
import WorkExperience from "../../components/WorkExperience/work-experience";

const About = () => {
    return (
        <AboutContainer>
            <AboutMe />
            <WorkExperience />
        </AboutContainer>
    );
};

export default About;