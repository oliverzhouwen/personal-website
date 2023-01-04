import pictures from '../../pictures';
import { PictureCard } from './picture.styles';
import { PictureCardsContainer } from './pictures.styles';
import ModalContent from '../ModalContent/model-content';

import ReactModal from 'react-modal';
import { useState } from 'react';

const Pictures = () => {

    type pictureObject = {
        "url": string,
        "name": string,
        "description": string,
        "location": string
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedPicrure, setSelectedPicture] = useState(pictures[0]);

    const renderPicturesHandler = (pics: pictureObject[]) => {
        return pics.map(picture => {
            return <PictureCard src={picture["url"]} onClick={() => {setShowModal(true); setSelectedPicture(picture)}}/>
        })
    }
    
    return (
        <>
        <PictureCardsContainer>
            {renderPicturesHandler(pictures)}
        </PictureCardsContainer>
        <ReactModal 
            isOpen={showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={() => setShowModal(false)}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
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
            }}
        >
            <ModalContent content={selectedPicrure}/>
        </ReactModal>
        </>
    );
};

export default Pictures;