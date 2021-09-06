import nivedan from 'nivedan';

nivedan.defaultConfig({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
});

nivedan.middleware.request.use(
	function (config) {
		const newConfig = config;
		return newConfig;
	},
	function (error) {
		return Promise.reject(error);
	}
);

nivedan.middleware.response.use(
	(response) => response,
	(err) => {
		return Promise.reject(err);
	}
);

export default nivedan;
