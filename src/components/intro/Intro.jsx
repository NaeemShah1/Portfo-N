import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Design", "UI/UX Design", "Motion Design", "Web Development"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src={`${
              import.meta.env.BASE_URL
            }assets/personal-imgs/naeem_shah.jpg`}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Naeem Shah</h1>
          <h3>
            Exploring <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={`${import.meta.env.BASE_URL}assets/down.png`} alt="" />
        </a>
      </div>
    </div>
  );
}
