import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/foodiepal-brand-logo.jpg",
      title: "Food App",
      desc:
        "This application is typically intended for traveler looking for food recommendations. ",
      img:
      "./assets/foodiepal-brand-logo.jpg",
    },
    {
      id: "2",
      icon: "./assets/weather-app.jpg",
      title: "Weather Dashboard",
      desc:
        "A simple calendar application that allows user to save events for each hour of the day.",
      img:
      "./assets/weather-app.jpg",
    },
    {
      id: "3",
      icon: "./assets/work-day-scheduler.jpg",
      title: "Work Day Scheduler",
      desc:
      "Allows user to see the weather outlook for multiple cities so that a trip can be planned accordingly.",
      img:
      "./assets/work-day-scheduler.jpg",
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
                  <span>Project</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="./assets/foodiepal-brand-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}