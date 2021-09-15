import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [people, setPeople] = useState([]);
  return (
    <DataContext.Provider value={[people, setPeople]}>
      {props.children}
    </DataContext.Provider>
  );
};