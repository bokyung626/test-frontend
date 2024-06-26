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
        <img className="front" src="/images/cherry.jpg" />
        <img className="back" src="/images/flower.jpg" />
      </div>
    </div>
  );
};
