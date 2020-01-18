import React, { useState, useEffect, useContext } from 'react';
import { BeersContext } from '../../contexts/BeersContext';

const BeerDetails = ({ match: { params: { id } } }) => {
  const data = useContext(BeersContext);



  return (
    <div>
      {/*{console.log(data)}*/}
      {/*<h1>{beer.name}</h1>*/}
      {/*<p>{beer.tagline}</p>*/}
      {/*<p>{beer.abv}</p>*/}
      {/*<p>{beer.description}</p>*/}
      {/*<img src={beer.image_url}/>*/}
    </div>
  );
};

export default BeerDetails;