const addZeroInDay = (day) => {
	if (day > 9) return day;
	return `0${day}`;
};
export const makeReadableDate = (unixTime) => {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Ap',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const date = new Date(unixTime * 1000);
	return `${addZeroInDay(date.getDate())} ${months[date.getMonth()]}`;
};
