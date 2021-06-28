import React from 'react';
import PropTypes from 'prop-types';

export const EditIconSVG = props => (
  <svg
    width={props.width}
    height={props.height}
    {...props}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.40823 2.31116L7.77767 0.672268C7.66992 0.565064 7.52411 0.504883 7.37212 0.504883C7.22012 0.504883 7.07431 0.565064 6.96656 0.672268L1.186 6.44449L0.658227 8.72227C0.64002 8.80553 0.640645 8.89182 0.660054 8.97481C0.679463 9.0578 0.717167 9.13541 0.770411 9.20197C0.823656 9.26852 0.891095 9.32234 0.967804 9.3595C1.04451 9.39665 1.12855 9.4162 1.21378 9.41671C1.2535 9.42072 1.29351 9.42072 1.33323 9.41671L3.636 8.88894L9.40823 3.12227C9.51543 3.01452 9.57561 2.86871 9.57561 2.71671C9.57561 2.56472 9.51543 2.41891 9.40823 2.31116ZM3.35823 8.38894L1.19989 8.84171L1.69156 6.72505L6.01656 2.41671L7.68323 4.08338L3.35823 8.38894ZM8.05545 3.6806L6.38878 2.01393L7.35545 1.05282L8.99434 2.71949L8.05545 3.6806Z"
      fill={props.color}
    />
  </svg>
);

EditIconSVG.defaultProps = {
  width: 10,
  height: 10,
  color: '#979797',
};

EditIconSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
