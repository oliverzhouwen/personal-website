import './modal-content.css';

import { 
    ModalContentContainer,
    ModalContentInfo, 
    ModelContentImage 
} from "./modal-content.styles";

type propTypes = {
    content: {
        "url": string,
        "name": string,
        "description": string,
        "location": string
    }
};

const ModalContent = ({content}: propTypes) => {
    return (
        <ModalContentContainer>
            <ModelContentImage src={content.url} />
            <ModalContentInfo>
                    <h1 className="title">{content.name.toUpperCase()}</h1>
                    <div className="location">
                        <span className="locationTag">Location: </span>
                        <span className='locationInfo'>{content.location}</span>
                    </div>
                    <p style={{fontSize: '1em', color: '#636369'}}>{content.description}</p>
            </ModalContentInfo>
        </ModalContentContainer>
    );
};

export default ModalContent;