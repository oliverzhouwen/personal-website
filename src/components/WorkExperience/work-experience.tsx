import {
    WorkExperienceContainer,
    LeftContainer,
    RightContainer,
    Divider
} from "./work-experience.styles";
import JobCard from "./job-card";
import { employment_history } from "../../data";

const renderEmploymentHistory = () => {
    return (
        employment_history.map(employment => {
            const { position, companyLogo, location, duration, description } = employment;
            return (
                <JobCard key={position} position={position} companyLogo={companyLogo} location={location} duration={duration} description={description} />
            )
        })
    )
}

const WorkExperience = () => {
    return (
        <WorkExperienceContainer>
            <LeftContainer>
                <div className="contact-info-container">
                    <h2>Contact info</h2>
                    <Divider color="white" />
                    <ul>
                        <li>
                            <h4 className="contact-method">Mobile</h4>
                            <p>+61409225265</p>
                        </li>
                        <li>
                            <h4 className="contact-method">Email</h4>
                            <a href="mailto:oliver.zhou@msn.com">oliver.zhou@msn.com</a>
                        </li>
                    </ul>
                </div>
                <div className="education-container">
                    <h2>Education</h2>
                    <Divider color="white" />
                    <img src="https://courseseeker.edu.au/assets/images/institutions/3040.png" alt="USYD_Logo" />
                    <p>Bachelor of Engineering,<br />Electrical and Electronics Engineering</p>
                    <p>2014-2018</p>
                </div>
            </LeftContainer>

            <RightContainer>
                <h2>PAST EXPERIENCE</h2>
                <Divider color="black" />
                <div className="past-jobs">
                    {renderEmploymentHistory()}
                </div>
            </RightContainer>

        </WorkExperienceContainer>
    )
};

export default WorkExperience;