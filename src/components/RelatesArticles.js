import React from "react";
import food3 from "../assets/images/food-3.jpg"

const RelatesArticles = () => {
  return (
    <div className="more__aricles-container ">
      <div className="header">
        <div className="line">
          <hr />
        </div>
        <div>
          <h2>Realted Articles</h2>
        </div>
        <div className="line">
          <hr />
        </div>
      </div>
      
        <div className="card__flex">
            <div className="card__outter">
                <div className="card_img">
                    <img src={food3} alt="food-3"/>
                </div>
                <div className="heading">
                        <h2>Eiusmod sunt duis enim consectetur aliqua ullamco aute labore.</h2>
                </div>
                <div className="content">
                    <p>Qui irure cupidatat consequat ullamco anim laboris qui anim est irure elit excepteur.</p>
                </div>
            </div>
            <div className="card__outter">
            <div className="card_img">
                    <img src={food3} alt="food-3"/>
                </div>
                <div className="heading">
                        <h2>Eiusmod sunt duis enim consectetur aliqua ullamco aute labore.</h2>
                </div>
                <div className="content">
                    <p>Qui irure cupidatat consequat ullamco anim laboris qui anim est irure elit excepteur.</p>
                </div>
            </div>
            <div className="card__outter">
            <div className="card_img">
                    <img src={food3} alt="food-3"/>
                </div>
                <div className="heading">
                        <h2>Eiusmod sunt duis enim consectetur aliqua ullamco aute labore.</h2>
                </div>
                <div className="content">
                    <p>Qui irure cupidatat consequat ullamco anim laboris qui anim est irure elit excepteur.</p>
                </div>
            </div>
            <div className="card__outter">
            <div className="card_img">
                    <img src={food3} alt="food-3"/>
                </div>
                <div className="heading">
                        <h2>Eiusmod sunt duis enim consectetur aliqua ullamco aute labore.</h2>
                </div>
                <div className="content">
                    <p>Qui irure cupidatat consequat ullamco anim laboris qui anim est irure elit excepteur.</p>
                </div>
            </div>
        </div>
      </div>
    
  );
};

export default RelatesArticles;
