import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResults from "./components/SearchResults";
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        { <Header /> }
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/searchResult/:searchQuery"
            element={<SearchResults />}
          />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
