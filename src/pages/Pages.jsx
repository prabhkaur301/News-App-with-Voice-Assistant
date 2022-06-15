import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SavedArticles from "./SavedArticles";
const Pages = ({ articles, highlightArticle }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home articles={articles} highlightArticle={highlightArticle} />
        }
      />
      <Route path="/saveList" element={<SavedArticles />} />
    </Routes>
  );
};

export default Pages;
