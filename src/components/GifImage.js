import React from 'react';
import PropTypes from 'prop-types';

const GifImage = ( {id, title, url} ) => {
    
    return (
        <div className='card animate__animated animate__bounce animate__flash' id={ id }>
            <img src={ url } alt={ title } />
        </div>
    )
}

GifImage.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
}

export default GifImage;