import React from "react";
import Food1 from "../assets/images/food-1.jpg";
import Food2 from "../assets/images/food-2.jpg";

const MoreArticle = () => {
  return (
    <div className="more__aricles-container">
      <div className="header">
        <div className="line">
          <hr />
        </div>
        <div>
          <h2>More in this series</h2>
        </div>
        <div className="line">
          <hr />
        </div>
      </div>

      <div className="card">
        <div className="card__body">
          <div className="card__image">
            <img src={Food1} alt="food-1" />
          </div>
          <div className="card__details">
            <div className="card__title">
              <h2>Aliquip in id fugiat in consectetur nostrud Lorem tempor</h2>
            </div>
            <div className="card__content">
              <p>
                Incididunt irure eiusmod aute labore nisi enim autequa. Minim
                nostrud ad quis incididunt ea veniam eu ut. Do irure officia
                ipsum nostrud amet aute ullamco sunt qui esse id veniam irure
                veniam. Voluptate aliqua nostrud anim ea ut deserunt sunt
                commodo anim. Aute exercitation sit adipisicing adipisicing et
                ullamco aliqua. Sit ipsum excepteur eu reprehenderit.
              </p>
            </div>
          </div>
        </div>
        <div className="card__body">
          <div className="card__image">
            <img src={Food2} alt="food-1" />
          </div>
          <div className="card__details">
            <div className="card__title">
              <h2>Aliquip in id fugiat in consectetur nostrud Lorem tempor</h2>
            </div>
            <div className="card__content">
              <p>
                Incididunt irure eiusmod aute labore nisi enim autequa. Minim
                nostrud ad quis incididunt ea veniam eu ut. Do irure officia
                ipsum nostrud amet aute ullamco sunt qui esse id veniam irure
                veniam. Voluptate aliqua nostrud anim ea ut deserunt sunt
                commodo anim. Aute exercitation sit adipisicing adipisicing et
                ullamco aliqua. Sit ipsum excepteur eu reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreArticle;
