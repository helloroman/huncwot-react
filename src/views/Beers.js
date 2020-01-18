import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import BeerThumbnail from 'components/BeerThumbnail/BeerThumbnail';
import { API_URL } from '../constants';
import styles from './Beers.module.scss';
import { BeersContext } from '../contexts/BeersContext';

const Beers = () => {
  const { beers, setBeers } = useContext(BeersContext);
  const [loaderState, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    axios.get(API_URL)
      .then(({data}) => {
        setBeers(data);
        isLoading(false);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      {console.log(beers)}
      {
        loaderState ? (
          <h2>Loading...</h2>
        ) : (
          beers.map((item) => (
            <BeerThumbnail key={item.id} beer={item} />
          ))
        )
      }
    </div>
  );
};

export default Beers;
