import React from 'react';
import PropTypes from 'prop-types';

export const TimeFrameSVG = props => (
  <svg width={props.width} height={props.height} viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <rect width={32} height={40} fill="url(#patternTime)" />
    <defs>
      <pattern id="patternTime" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#imageTime" transform="scale(0.03125 0.025)" />
      </pattern>
      <image id="imageTime" width={32} height={40} xlinkHref="data:image/png;base64,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" />
    </defs>
  </svg>
);

TimeFrameSVG.defaultProps = {
  width: 32,
  height: 40,
  color: '#303030',
};

TimeFrameSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
