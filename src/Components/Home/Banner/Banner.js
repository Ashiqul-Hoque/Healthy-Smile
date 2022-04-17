import React from "react";
import "./Banner.css";
import slider1 from "../../../Images/slide1.jpg";
import slider2 from "../../../Images/slide2.jpg";
import slider3 from "../../../Images/slide3.png";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={slider1} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h3>
                "Let us always meet each other with smile, for the smile is the
                beginning of love"
              </h3>
              <p className="fs-4">
                <strong>- Mother Teresa</strong>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={slider2} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h3>
                "Smile, it is the key that fits the lock of everybody's heart"
              </h3>
              <p className="fs-4">
                <strong>- Anthony J. D'Angelo</strong>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={slider3} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h3>
                "Keep smiling, because life is a beautiful thing and there's so
                much to smile about"
              </h3>
              <p className="fs-4">
                <strong>- Marilyn Monroe</strong>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
