import React, { useState, useEffect, useCallback } from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ isOpen, onClose, images, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index when modal opens
    useEffect(() => {
        if (isOpen) setCurrentIndex(0);
    }, [isOpen]);

    // Handle Keyboard Navigation
    const handleKeyDown = useCallback((e) => {
        if (!isOpen) return;

        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'Escape') {
            onClose();
        }
    }, [isOpen, currentIndex]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!isOpen || !images || images.length === 0) return null;

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const selectImage = (index, e) => {
        e.stopPropagation();
        setCurrentIndex(index);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <h3>{projectTitle}</h3>
                    <span className="image-counter">{currentIndex + 1} / {images.length}</span>
                </div>

                <div className="modal-main-image-container">
                    <button className="nav-btn prev" onClick={prevImage} aria-label="Previous Image">&#10094;</button>

                    <img
                        src={images[currentIndex]}
                        alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                        className="modal-main-image"
                    />

                    <button className="nav-btn next" onClick={nextImage} aria-label="Next Image">&#10095;</button>
                </div>

                <div className="modal-thumbnails">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`thumbnail ${idx === currentIndex ? 'active' : ''}`}
                            onClick={(e) => selectImage(idx, e)}
                        >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
