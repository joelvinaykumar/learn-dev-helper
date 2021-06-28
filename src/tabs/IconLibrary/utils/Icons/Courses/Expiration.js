import React from 'react';
import PropTypes from 'prop-types';

export const CourseExpirationSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 45 45" fill="none" {...props}>
      <g clipPath="url(#expiration-icon)">
        <path d="M10.8 1.10019C9.8 1.60019 9 3.20019 9 4.50019C9 6.40019 8.5 7.00019 6.7 7.00019C2.4 7.00019 2 8.40019 2 25.6002C2 39.0002 2.3 42.1002 3.6 43.4002C5.9 45.8002 39.1 45.8002 41.4 43.4002C42.7 42.1002 43 39.0002 43 25.6002C43 8.40019 42.6 7.00019 38.3 7.00019C36.5 7.00019 36 6.40019 36 4.50019C36 -0.599805 28.5 -0.899805 27.8 4.20019C27.5 6.20019 26.9 6.50019 22.5 6.50019C18.3 6.50019 17.5 6.20019 17.2 4.50019C16.9 2.70019 14.4 0.000194639 13.1 0.000194639C12.8 0.000194639 11.7 0.500195 10.8 1.10019ZM40 29.0002V42.0002H22.5H5V29.0002V16.0002H22.5H40V29.0002Z" fill={props.color} />
      </g>
      <defs>
        <clipPath id="expiration-icon">
          <rect width={45} height={45} fill="white" />
        </clipPath>
      </defs>
    </svg>
  </React.Fragment>
);

CourseExpirationSVG.defaultProps = {
  width: 45,
  height: 45,
  color: 'rgb(149,149,149)',
};

CourseExpirationSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
