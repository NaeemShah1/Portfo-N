import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: `${import.meta.env.BASE_URL}assets/mobile.png`,
      title: "Back-end Development",
      desc: "Using Python as the back-end programming language. ",
      img: `${import.meta.env.BASE_URL}assets/certificates/mosh-python.PNG`,
    },
    {
      id: "2",
      icon: `${import.meta.env.BASE_URL}assets/globe.png`,
      title: "Front-End Development",
      desc: "Using Java Script as the back-end programming language.",
      img: `${import.meta.env.BASE_URL}assets/certificates/mosh-react.PNG`,
    },
    {
      id: "3",
      icon: `${import.meta.env.BASE_URL}assets/writing.png`,
      title: "Data Base",
      desc: "MySQL is used by me.",
      img: `${import.meta.env.BASE_URL}assets/certificates/mosh-sql.PNG`,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={`${import.meta.env.BASE_URL}assets/arrow.png`}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={`${import.meta.env.BASE_URL}assets/arrow.png`}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
