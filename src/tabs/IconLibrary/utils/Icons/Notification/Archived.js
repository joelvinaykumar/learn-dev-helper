import React from 'react';
import PropTypes from 'prop-types';

export const ArchivedNotificationSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 52 52" fill="none" {...props}>
      <path d="M26 50C39.2548 50 50 39.2548 50 26C50 12.7452 39.2548 2 26 2C12.7452 2 2 12.7452 2 26C2 39.2548 12.7452 50 26 50Z" fill="#E02C42" stroke="white" strokeWidth="2.4" />
      <rect x={14} y={14} width={24} height={24} fill="url(#patternN0)" />
      <defs>
        <pattern id="patternN0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <use xlinkHref="#image0" transform="scale(0.00520833)" />
        </pattern>
        <image id="image0" width={192} height={192} xlinkHref="data:image/png;base64,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" />
      </defs>
    </svg>
  </React.Fragment>
);

ArchivedNotificationSVG.defaultProps = {
  width: 52,
  height: 52,
};

ArchivedNotificationSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
