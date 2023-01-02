import { PictureCard } from "./picture.styles";

type propsType = {
    imageURL: string
};

const Picture = ({ imageURL }: propsType) => {
    return (
        <PictureCard src={imageURL}/>
    )
};

export default Picture;