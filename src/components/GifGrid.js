import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifImage from './GifImage';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return(
        <div className='card-grid'>
            <h3 className='title-grid'>{ category }</h3>
            
            { loading && <p>Cargando...</p> }

            {
                images.map( ( img ) => (
                    <GifImage 
                        key={ img.id }
                        { ...img } 
                    />
                ))
            }
           
        </div>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string
}

export default GifGrid;