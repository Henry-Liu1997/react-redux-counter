import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getWeather } from './action';

const Weather = ({ loading, cities, getWeather }) => {
  useEffect(() => {
    getWeather();
  }, []);

  console.log(loading, cities);

  if (loading) {
    return <div className="weather__container">Loading....</div>;
  }

  return (
    <div className="weather__container">
      {cities.map((city) => {
        return (
          <div key={city.id} className="weather">
            <h3>{city.name}</h3>
            <h2>{city.main.temp} degree</h2>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ weatherState }) => {
  return {
    loading: weatherState.loading,
    cities: weatherState.data,
  };
};
export default connect(mapStateToProps, { getWeather })(Weather);
