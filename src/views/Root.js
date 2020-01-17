import React, { useEffect, useState } from 'react';
import BeerThumbnail from 'components/BeerThumbnail/BeerThumbnail';
import { API_URL } from '../constants';
import axios from 'axios';

const Root = () => {
  const [beers, setBeers] = useState([]);
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
    <div>
      {
        loaderState ? (
          <h2>Loading...</h2>
        ) : (
          beers.map(item => (
            <BeerThumbnail beer={item} />
          ))
        )
      }
    </div>
  );
};

export default Root;
