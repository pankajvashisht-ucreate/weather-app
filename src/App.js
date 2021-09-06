import { useState, useCallback } from 'react';
import { nivedan, makeReadableDate } from 'utils';
import './App.css';
import { Input, Button, WeatherCard } from 'component';
function App() {
	const [cityName, setCityName] = useState('');
	const [weatherInfo, setWeatherInfo] = useState({});
	const [loading, setLoading] = useState(true);
	const handleChange = useCallback(
		({ target: { value } }) => {
			setCityName(value);
		},
		[setCityName]
	);
	const searchWeatherInfo = useCallback(() => {
		setLoading(true);
		nivedan
			.get('weather', {
				params: {
					q: cityName,
					appid: process.env.REACT_APP_WEATHERKEY,
					units: 'metric',
				},
			})
			.then(({ data }) => {
				setWeatherInfo(data);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [cityName, setLoading]);
	return (
		<div className='App'>
			<div className='searchBox'>
				<div className='logo'>
					<img
						src='https://uxwing.com/wp-content/themes/uxwing/download/27-weather/weather.png'
						alt='logo'
						height='60px'
						width='85px'
					/>
				</div>
				<Input
					value={cityName}
					name='cityName'
					onChange={handleChange}
					placeholder='Enter City Name'
				/>{' '}
				<Button onClick={searchWeatherInfo}>Search</Button>
			</div>
			<div className='result'>
				{loading ? (
					<img
						src='https://sethiguneet.github.io/website/lg.cloudy-sky-preloader.gif'
						alt='loading'
					/>
				) : Object.keys(weatherInfo).length === 0 ? (
					<h1>Enter city name for check report </h1>
				) : (
					<WeatherCard
						cityName={`${weatherInfo?.name} (${weatherInfo?.sys?.country})`}
						date={makeReadableDate(weatherInfo?.dt)}
						weatherType={
							Array.isArray(weatherInfo.weather) &&
							weatherInfo?.weather[0]?.main
						}
						temp={parseInt(weatherInfo?.main?.temp)}
						imageId={
							Array.isArray(weatherInfo.weather) &&
							weatherInfo?.weather[0]?.icon
						}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
