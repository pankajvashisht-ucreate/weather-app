import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className = 'button', ...props }) => (
	<button onClick={onClick} className={className} {...props}>
		{children}
	</button>
);
Button.propTypes = {
	children: PropTypes.any.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
};
export default memo(Button);
