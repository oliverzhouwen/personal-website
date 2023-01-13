import { pictures } from '../../data';
// import { PictureCard } from './picture.styles';
import { PictureCardsContainer, PictureCard } from './pictures.styles';
import ModalContent from '../ModalContent/modal-content';
import Loader from '../Loader/loader';

import ReactModal from 'react-modal';
import { useEffect, useRef, useState } from 'react';

const Pictures = () => {

    type pictureObject = {
        "url": string,
        "name": string,
        "description": string,
        "location": string
    }

    type modalStyleType = {
        overlay: React.CSSProperties,
        content: React.CSSProperties
    }

    const modalStyle: modalStyleType = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(17, 21, 24, 0.45)',
        },
        content: {
            height: '70vh',
            width: '90vw',
            position: 'absolute',
            top: '15%',
            left: '5%',
            bottom: '15%',
            borderStyle: 'none',
            borderRadius: '14px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '0',
            backgroundColor: 'white',
        }
    };

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
            // document.querySelector(".picture-component")?.removeChild(document.querySelector(".loader")!);
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
                style={modalStyle}
            >
                <ModalContent content={selectedPicrure}/>
            </ReactModal>
        </div>
    );
};

export default Pictures;