import React from "react";
import Articles from "./Articles";
import Footer from "./Footer";
import Header from "./Header";
import MoreArticle from "./MoreArticle";
import RelatesArticles from "./RelatesArticles";
import SubMenu from "./SubMenu";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="main__content container">
        <main><Articles/></main>
        <aside><SubMenu/></aside>
        <div className="more__articles">
          <MoreArticle/>
          
        </div>
        
      </div>
      <div className="container">
      <RelatesArticles/>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
