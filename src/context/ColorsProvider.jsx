import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ColorsContext = createContext();

const ColorsProvider = ({ children }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get("http://demo1296135.mockable.io/colors")
      .then(res => setColors(res.data.colors))
      .catch(err => console.log(err));
  }, []);

  return (
    <ColorsContext.Provider value={colors}>
      {children}
    </ColorsContext.Provider>
  );
};

export { ColorsProvider, ColorsContext};