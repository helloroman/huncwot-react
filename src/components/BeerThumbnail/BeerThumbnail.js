import React from 'react';
import PropTypes from 'prop-types';

const BeerThumbnail = ({ beer: { name, tagline, image_url } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{tagline}</p>
      <img src={image_url}/>
    </div>
  );
};

BeerThumbnail.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string,
    tagline: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};


export default BeerThumbnail;