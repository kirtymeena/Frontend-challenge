import React, {  useState } from "react";
import Banner from "./Banner";

const Header = () => {
  const [open, setOpen] = useState(false);
  const[clicked,setClicked] = useState()
  const DisplayNav = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <header>
      <nav className="nav__item container">
        <div className="nav__logo">
          <h1>OYODO</h1>
        </div>

        {/* nav for small screens */}
        <div className="nav__item-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
            onClick={DisplayNav}
          >
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
          <div className={`nav__links-sm ${open ? "open" : ""}`}>
            <svg
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
            >
              <g fill="#D0D6F9" fillRule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
            <div className={`nav__link ${clicked==="HOME"?"clicked":""}`}>
              <button>HOME</button>
            </div>
            <div className={`nav__link ${clicked==="HOME"?"clicked":""}`}>
              <button>ABOUT</button>
            </div>
            <div className={`nav__link ${clicked==="HOME"?"clicked":""}`}>
              <button>PRODUCTS</button>
            </div>
            <div className={`nav__link ${clicked==="HOME"?"clicked":""}`}>
              <button>PRICING</button>
            </div>
            <div className={`nav__link ${clicked==="HOME"?"clicked":""}`}>
              <button>CONTACT</button>
            </div>

            {/* sub menu */}
            <div className="submenu">
              <h3>SubMenu</h3>
              <div className="nav__link">
                <p>HOME</p>
              </div>
              <div className=" nav__link">
                <p>EXAMPLE</p>
              </div>
              <div className=" nav__link">
                <p>CONTACT</p>
              </div>
              <div className=" nav__link">
                <p>ABOUT</p>
              </div>
            </div>
          </div>
        </div>

        {/* nav for large screens */}
        <div className="nav__item-lg underline-indicator">
          <div className={`nav__link ${clicked==="HOME"?"clicked":""}`} onClick={e=>setClicked(e.target.textContent)}>
            <button>HOME</button>
          </div>
          <div className={`nav__link ${clicked==="ABOUT"?"clicked":""}`} onClick={e=>setClicked(e.target.textContent)}>
            <button>ABOUT</button>
          </div>
          <div className={`nav__link ${clicked==="PRODUCTS"?"clicked":""}`} onClick={e=>setClicked(e.target.textContent)}>
            <button>PRODUCTS</button>
          </div>
          <div className={`nav__link ${clicked==="PRICING"?"clicked":""}`} onClick={e=>setClicked(e.target.textContent)}>
            <button>PRICING</button>
          </div>
          <div className={`nav__link ${clicked==="CONTACT"?"clicked":""}`} onClick={e=>setClicked(e.target.textContent)}>
            <button>CONTACT</button>
          </div>
        </div>
      </nav>

      <Banner />
    </header>
  );
};

export default Header;
