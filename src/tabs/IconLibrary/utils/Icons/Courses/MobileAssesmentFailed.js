import React from 'react';
import PropTypes from 'prop-types';

export const MobileAssesmentFailedSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 27 28" fill="none" {...props}>
      <path d="M13.5 26.625C20.4036 26.625 26 21.0286 26 14.125C26 7.22144 20.4036 1.625 13.5 1.625C6.59644 1.625 1 7.22144 1 14.125C1 21.0286 6.59644 26.625 13.5 26.625Z" stroke="white" strokeWidth={2} />
      <path d="M8.5 9.125L18.6158 19.2408" stroke="white" strokeWidth={3} strokeLinecap="square" />
      <path d="M18.5 9.125L8.38423 19.2408" stroke="white" strokeWidth={3} strokeLinecap="square" />
    </svg>
  </React.Fragment>
);

MobileAssesmentFailedSVG.defaultProps = {
  width: 27,
  height: 28,
};

MobileAssesmentFailedSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
