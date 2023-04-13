import React from "react";
import styles from "../src/styles/imgComp.css";
import styles2 from "../src/styles/imgpage.css";
import { Link } from "react-router-dom";
const imgComp = () => {
  return (
    <div className="container">
      <div className="imgbox">
        <Link to="imgpage1">
          <div className="img">
            <div className="nn">
              <div className="vv">
                <img className="row" src="img/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </Link>

        <Link to="imgpage2">
          {" "}
          <div className="img">
            <div className="nn">
              <div className="vv">
                <img className="row" src="img/2.jpg" alt="" />
              </div>
            </div>
          </div>
        </Link>

        <Link to="imgpage3">
          <div className="img">
            <div className="nn">
              <div className="vv">
                <img className="row" src="img/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default imgComp;
