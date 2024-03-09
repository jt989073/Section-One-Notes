import React, { useState } from 'react';
import axios from 'axios';

const PhotoUpload = () => {
    const [file, setFile] = useState('');

    const handleSubmit = async (e) => {

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={'change this'} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default PhotoUpload;