import { JobCardContainer } from "./work-experience.styles";

type propTypes = {
    position: string,
    companyLogo: string,
    duration: string,
    location: string,
    description: string
}

const JobCard = ({position, companyLogo, duration, location, description}: propTypes) => {
    return (
        <JobCardContainer>
            <h3 className="position">{position}</h3>
            <div className="position-info">
                <div className="company">
                    <img 
                        src={companyLogo}
                    />
                </div>
                <div className="time-and-location">
                    <p>{location}</p>
                    <p>{duration}</p>
                </div>
            </div>
            <div className="description" dangerouslySetInnerHTML={{__html: description}}/>
        </JobCardContainer>
    )
};

export default JobCard;