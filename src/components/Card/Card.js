import React, { useState } from "react";
import "./style.css";

export const Card = () => {
  const [rotate, setRotate] = useState(false);

  // ratate가 true라면 뒷면, false라면 앞면을 화면에 출력
  const onClickHandler = () => {
    setRotate(!rotate);
  };

  return (
    <div className="container">
      <div
        className={`card ${rotate ? "rotate" : ""}`}
        onClick={() => {
          onClickHandler();
        }}
      >
        <img
          className="front"
          src="https://i.pinimg.com/564x/25/db/84/25db84915447daf226a14561a3530ff7.jpg"
          alt="front"
        />
        <img
          className="back"
          src="https://i.pinimg.com/564x/27/ec/53/27ec5395bcfa4a9c2b6f2e032a1504bf.jpg"
          alt="back"
        />
      </div>
    </div>
  );
};
