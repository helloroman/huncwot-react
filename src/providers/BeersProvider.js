import React, { useState } from 'react';
import { BeersContext } from '../contexts/BeersContext';
import PropTypes from 'prop-types';

const BeersProvider = ({children}) => {
  const [beers, setBeers] = useState([]);

  return (
    <BeersContext.Provider value={{beers, setBeers}}>
      {children}
    </BeersContext.Provider>
  );
};

BeersProvider.propTypes = {};

export default BeersProvider;