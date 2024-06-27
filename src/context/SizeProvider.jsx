import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const SizeContext = createContext();

const SizeProvider = ({ children }) => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    axios
      .get("http://demo1296135.mockable.io/sizes")
      .then(res => setSizes(res.data.sizes))
      .catch(err => console.log(err));
  }, []);

  return (
    <SizeContext.Provider value={sizes}>
      {children}
    </SizeContext.Provider>
  );
};

export { SizeProvider, SizeContext };