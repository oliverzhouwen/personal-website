import { pictures } from '../../data';
import { PictureCardsContainer, PictureCard } from './pictures.styles';
import ModalContent from '../ModalContent/modal-content';
import Loader from '../Loader/loader';
import { IoClose } from "react-icons/io5";

import ReactModal from 'react-modal';
import { useState } from 'react';
import './modal.styles.css';

const Pictures = () => {

    type pictureObject = {
        "url": string,
        "name": string,
        "description": string,
        "location": string
    }

    // type modalStyleType = {
    //     overlay: React.CSSProperties,
    //     content: React.CSSProperties
    // }

    const [showModal, setShowModal] = useState(false);
    const [selectedPicrure, setSelectedPicture] = useState(pictures[0]);
    const [loaded, setLoaded] = useState(0);

    const renderPicturesHandler = (pics: pictureObject[]) => {
        return pics.map(picture => {
            return <PictureCard 
                        key={picture.name}
                        src={picture.url}
                        loading="lazy"
                        onClick={() => {setShowModal(true); setSelectedPicture(picture)}}
                        onLoad={() => {setLoaded(prevState => prevState + 1)}}
                    />
        })
    }

    if (loaded === pictures.length) {
        document.body.style.overflow = 'visible';
        let loaderElement = document.querySelector<HTMLElement>(".loader");
        if(loaderElement != null) {
            loaderElement.style.opacity = '0';
            loaderElement.style.visibility = 'hidden';
        }
    } else {
        document.body.style.overflow = 'hidden';
    }
    
    return (
        <div className="picture-component">
            <Loader />
            <PictureCardsContainer>
                {
                    renderPicturesHandler(pictures)
                }
            </PictureCardsContainer>
            <ReactModal 
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={() => setShowModal(false)}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
                className="content"
                overlayClassName="overlay"
                overlayElement={
                    (props, contentElement) =>
                    <div {...props}>
                        <div className='closeButton'><IoClose /></div>
                        {contentElement}
                    </div>
                }
                
                contentElement={
                (props, children) => <div {...props}>{children}</div>
                }
            >
                <ModalContent content={selectedPicrure}/>
            </ReactModal>
        </div>
    );
};

export default Pictures;