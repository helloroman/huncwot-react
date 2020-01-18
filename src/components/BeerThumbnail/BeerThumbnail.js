import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './BeerThumbnail.module.scss';


const BeerThumbnail = ({ beer: { id, name, tagline, image_url } }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/beers/${id}`} className={styles.link}>{name}</Link>
      <p>{tagline}</p>
      <img src={image_url} />
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