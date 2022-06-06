import React from "react";
import "./Iconfinder.css"
const IconFinder = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="wrapper d-flex flex-column justify-content-center align-items-center"style={{ height: "50%" }}>
        <div className="logo">
          <img src="https://www.iconfinder.com/static/img/logo/black.svg?7cfe2038c8" />
        </div>
        <form className="search my-4  d-flex justify-content-center align-items-center"style={{ width: "100%" }}>
          <div className="input-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search 6M icons, 3D and illustrations..."
            />
            <div className="input-group-append">
              <button className="button_icon">Icons</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IconFinder;
