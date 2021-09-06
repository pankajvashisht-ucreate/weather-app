import React, { memo } from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({ cityName, weatherType, temp, date, imageId }) => (
	<article className='widget'>
		<div className='weatherIcon'>
			<img
				src={`http://openweathermap.org/img/wn/${imageId}@2x.png`}
				alt='icon'
			/>
		</div>
		<div className='weatherInfo'>
			<div className='temperature'>
				<span>{temp}&deg;</span>
			</div>
			<div className='description'>
				<div className='weatherCondition'>{weatherType}</div>
				<div className='place'>{cityName}</div>
			</div>
		</div>
		<div className='date'>{date}</div>
	</article>
);
WeatherCard.propType = {
	cityName: PropTypes.string.isRequired,
	weatherType: PropTypes.string.isRequired,
	temp: PropTypes.number.isRequired,
	date: PropTypes.string.isRequired,
	imageId: PropTypes.string.isRequired,
};
export default memo(WeatherCard);
