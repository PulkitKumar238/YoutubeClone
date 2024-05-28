import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();
export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearctResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);
  const fetchSelectedCategoryData = async (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setSearctResults(contents);
      setLoading(false);
   });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearctResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
