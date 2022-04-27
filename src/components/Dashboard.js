import React, { useState, useEffect } from "react";

// import images
import Ellipsis from "../images/icon-ellipsis.svg";
import IconPlay from "../images/icon-play.svg";
import IconExercise from "../images/icon-exercise.svg";
import IconSelfCare from "../images/icon-self-care.svg";
import IconSocial from "../images/icon-social.svg";
import IconStudy from "../images/icon-study.svg";
import IconWork from "../images/icon-work.svg";

function Dashboard({ time, Posts }) {
  const [data, setData] = useState(Posts);

  // scramble animation number effect
  const animateNumber = (allNumber) => {
    let valueDisplays = allNumber;
    let interval = 500;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = valueDisplay.firstElementChild.innerHTML;

      let duration = Math.floor(interval / endValue);
      let counter = setInterval(() => {
        startValue += 1;
        if (valueDisplay.firstElementChild.innerHTML == 0) {
          valueDisplay.firstElementChild.innerHTML = 0;
        } else {
          valueDisplay.firstElementChild.innerHTML = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }
      }, duration);
    });
  };

  useEffect(() => {
    const curr = document.querySelectorAll(".currently");
    const prev = document.querySelectorAll(".last_time");
    const allNumber = [...curr].concat(...prev);
    animateNumber(allNumber);
  }, [time]);

  const pickColor = (title) => {
    if (title == "Work") {
      return "bg-light-red";
    } else if (title == "Play") {
      return "bg-soft-blue";
    } else if (title == "Study") {
      return "bg-soft-red";
    } else if (title == "Social") {
      return "bg-violet";
    } else if (title == "Self Care") {
      return "bg-soft-orange";
    } else if (title === "Exercise") {
      return "bg-lime-green";
    }
  };

  const pickImage = (title) => {
    if (title === "Work") {
      return IconWork;
    } else if (title === "Play") {
      return IconPlay;
    } else if (title === "Study") {
      return IconStudy;
    } else if (title === "Social") {
      return IconSocial;
    } else if (title === "Self Care") {
      return IconSelfCare;
    } else if (title === "Exercise") {
      return IconExercise;
    }
  };

  return (
    <>
      {data?.map((item) => {
        return (
          <div id={item.title.toLowerCase()} className={`card ${pickColor(item.title)}`}>
            <img src={pickImage(item.title)} alt="work_icon" className="absolute right-4" />

            <div className="bg-dark-blue-2 h-4/5 absolute inset-x-0 bottom-0 flex flex-col justify-center px-4 lg:px-6 rounded-xl cursor-pointer hover:bg-purple">
              <div className=" title">
                <p className="">{item.title}</p>
                <a href="#" className="py-2">
                  <img src={Ellipsis} alt="ellipsis" />
                </a>
              </div>
              <div className="info ">
                {time === "Daily" && (
                  <>
                    <h1 className="currently ">
                      <span>{item.timeframes.daily.current}</span>
                      hrs
                    </h1>

                    <p className="last_time ">
                      Last Day - <span>{item.timeframes.daily.previous}</span>hrs
                    </p>
                  </>
                )}
                {time === "Weekly" && (
                  <>
                    <h1 className="currently ">
                      <span>{item.timeframes.weekly.current}</span>hrs
                    </h1>

                    <p className="last_time ">
                      Last Week - <span>{item.timeframes.weekly.previous}</span>hrs
                    </p>
                  </>
                )}
                {time === "Monthly" && (
                  <>
                    <h1 className="currently ">
                      <span>{item.timeframes.monthly.current}</span>hrs
                    </h1>

                    <p className="last_time ">
                      Last Month - <span>{item.timeframes.monthly.previous}</span>hrs
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Dashboard;
