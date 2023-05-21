import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateDEtails = () => {
    const loadedData=useLoaderData();
    return (
        <div>
            <h1>Commmmjjjjjj</h1>
            <p>{loadedData.price}</p>
        </div>
    );
};

export default UpdateDEtails;