import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <h2>Photo List</h2>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.url} alt={photo.filename} style={{ maxWidth: '200px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;