import Modal from 'react-modal';
import { useEffect } from 'react';

import css from "./ImageModal.module.css"

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onRequestClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onRequestClose]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onRequestClose();
        }
    };

    if (!imageUrl) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={css.modalContent}
            overlayClassName={css.modalOverlay}
            onClick={handleOverlayClick} 
        >
            <button className={css.closeButton} onClick={onRequestClose}>✖</button>
            <img src={imageUrl} alt="Large" className={css.modalImage} />
        </Modal>
    );
}