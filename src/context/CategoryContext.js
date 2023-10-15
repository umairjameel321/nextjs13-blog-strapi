"use client";

import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const changeCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
