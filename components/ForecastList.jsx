import React from "react";
import css from "./ForecastList.scss";

const ForecastList = ({ list, currentCity }) => {
  return (
    list.length > 0 && (
      <section className={css.ForecastList}>
        <h2>Forecast for {currentCity}: </h2>
        {list.map((item, index) => {
          return (
            <article className={css.ForecastItem} key={`forecast_${index}`}>
              <div className={css.ForecastItemIcon}>
                <span>Day {new Date(item.dt * 1000).getDate()}</span>
                <img src={getSrcIcon(item.weather[0].icon)} />
                <div className={css.ForecastTemperature}>
                  <span>Max: {Math.round(item.temp.max)}°C</span>
                  <span>Min: {Math.round(item.temp.min)}°C</span>
                </div>
              </div>

              <span>{item.weather[0].description}</span>
              <span>humidity: {item.humidity} %</span>
              <span>pressure: {item.pressure} hpa</span>
            </article>
          );
        })}
      </section>
    )
  );
};

function getSrcIcon(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

export default ForecastList;
