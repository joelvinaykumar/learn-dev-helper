import React from 'react';
import PropTypes from 'prop-types';

export const AddTextSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 19 19" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.4204 4.62262C17.5052 4.53691 17.5546 4.4206 17.5545 4.29849C17.5545 4.17701 17.505 4.06063 17.4203 3.97442L15.0978 1.65258C15.0082 1.56319 14.8908 1.51814 14.7731 1.51807C14.6557 1.51828 14.5382 1.5629 14.4493 1.65279C14.4493 1.65279 5.80341 10.2982 5.7976 10.3039C5.69086 10.4107 4.18211 14.2106 4.12565 14.3506C4.05602 14.5214 4.09583 14.716 4.22631 14.8463C4.3553 14.9756 4.55058 15.0163 4.72207 14.9472C4.85609 14.8931 8.66727 13.378 8.76793 13.2743C8.8309 13.2112 17.3572 4.6851 17.4204 4.62262V4.62262Z" stroke={props.color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5.79688 10.304L8.76713 13.2742" stroke={props.color} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14.1035 10.2083V16.5833C14.1035 17.2092 13.9127 17.6458 13.2867 17.6458H2.41602C1.79006 17.6458 1.35352 17.2092 1.35352 16.5833V5.78627C1.35352 5.12235 1.82583 4.89575 2.48975 4.89575H8.79102" stroke={props.color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  </React.Fragment>
);

AddTextSVG.defaultProps = {
  width: 19,
  height: 19,
  color: '#FF3366',
};

AddTextSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
