// src/App.jsx

import WeatherForecastItem from "./components/WeatherForecast/WeatherForecast";


const weatherForecasts = [
  {
    day: "Mon",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg",
    imgAlt: "sun icon",
    conditions: "sunny",
    time: "Morning",
  },
  {
    day: "Tue",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg",
    imgAlt: "moon icon",
    conditions: "clear",
    time: "Night",
  },
  {
    day: "Wed",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg",
    imgAlt: "clouds with lightning icon",
    conditions: "stormy",
    time: "All Day",
  },
  {
    day: "Thu",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg",
    imgAlt: "sun overcast by clouds icon",
    conditions: "overcast",
    time: "Evening",
  },
  {
    day: "Fri",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg",
    imgAlt: "moon overcast by clouds icon",
    conditions: "cloudy",
    time: "Night",
  },
];

const [mon,tue,wed,thu,fri] = weatherForecasts; // destructuring


const App = () => {
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        <WeatherForecastItem day={mon.day} conditions={mon.conditions} time={mon.time} img={mon.img} imgAlt={mon.imgAlt}/>
        <WeatherForecastItem day={tue.day} conditions={tue.conditions} time={tue.time} img={tue.img} imgAlt={tue.imgAlt}/>
        <WeatherForecastItem day={wed.day} conditions={wed.conditions} time={wed.time} img={wed.img} imgAlt={wed.imgAlt}/>
        <WeatherForecastItem day={thu.day} conditions={thu.conditions} time={thu.time} img={thu.img} imgAlt={thu.imgAlt}/>
        <WeatherForecastItem day={fri.day} conditions={fri.conditions} time={fri.time} img={fri.img} imgAlt={fri.imgAlt}/>
      </section>
    </>
  );
};

export default App;
