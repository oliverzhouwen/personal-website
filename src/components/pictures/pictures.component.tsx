import pictures from '../../pictures';
import Picture from '../picture/picture.component';
import { PictureCardsContainer } from './pictures.styles';

const Pictures = () => {

    type pictureObject = {
        "url": string,
        "name": string,
        "description": string,
        "location": string
    }
    

    const renderPicturesHandler = (pics: pictureObject[]) => {
        return pics.map(picture => {
            return <Picture imageURL={picture["url"]}/>
        })
    }

    return (
        <PictureCardsContainer>
            {renderPicturesHandler(pictures)}
        </PictureCardsContainer>
    );
};

export default Pictures;