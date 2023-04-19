import React from "react";
import Header from "../../containers/header/Header";
import Blog from "../../containers/blog/Blog";
import Genres from "../../containers/genres/Genres";
import Footer from "../../containers/footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <Blog />
      <Genres />
      <Footer />
    </>
  );
};

export default MainPage;
