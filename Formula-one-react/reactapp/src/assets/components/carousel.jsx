import React from "react";

function carousel() {
  return (
    <div className="carousel-box">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/03a6150e-4663-4039-a38f-20e7c33a7dab.jpg?v=142"
              className="d-block w-100"
              alt="senna debut"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/fom-website/2024/Monaco/Senna%20McLaren%20livery/MCL38_Render%20"
              className="d-block w-100"
              alt="mclaren livery"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1440x900/8fbc0cac-8e33-4aa1-b076-bf1e4212ec89.jpg?v=148"
              className="d-block w-100"
              alt="monaco"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
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
}

export default carousel;
