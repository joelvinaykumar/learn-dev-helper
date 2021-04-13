import React from 'react';
import PropTypes from 'prop-types';

export const ExamSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 14 18" fill="none" {...props}>
      <g clipPath="url(#exam-icon)">
        <path d="M11.1428 5.03784H6.57136C6.41365 5.03784 6.28564 5.16295 6.28564 5.31772C6.28564 5.4725 6.41365 5.59761 6.57136 5.59761H11.1428C11.3005 5.59761 11.4285 5.4725 11.4285 5.31772C11.4285 5.16295 11.3005 5.03784 11.1428 5.03784Z" fill="#717171" />
        <path d="M11.1428 8.39648H6.57136C6.41365 8.39648 6.28564 8.52159 6.28564 8.67634C6.28564 8.83114 6.41365 8.95628 6.57136 8.95628H11.1428C11.3005 8.95628 11.4285 8.83114 11.4285 8.67634C11.4285 8.52159 11.3005 8.39648 11.1428 8.39648Z" fill="#717171" />
        <path d="M4.53569 7.89797L3.30683 8.86102L2.91625 8.47845C2.80454 8.36901 2.62397 8.36901 2.51226 8.47845C2.40054 8.58785 2.40054 8.76477 2.51226 8.87422L3.08368 9.43394C3.13911 9.48828 3.21226 9.51597 3.28568 9.51597C3.34854 9.51597 3.41168 9.49582 3.46397 9.45468L4.89254 8.33515C5.01596 8.23831 5.03568 8.06226 4.93711 7.94163C4.83882 7.82072 4.65882 7.80141 4.53569 7.89797Z" fill="#717171" />
        <path d="M11.1428 11.7552H6.57136C6.41365 11.7552 6.28564 11.8803 6.28564 12.0351C6.28564 12.1899 6.41365 12.315 6.57136 12.315H11.1428C11.3005 12.315 11.4285 12.1899 11.4285 12.0351C11.4285 11.8803 11.3005 11.7552 11.1428 11.7552Z" fill="#717171" />
        <path d="M13.125 0.428589H0.875C0.633375 0.428589 0.4375 0.620467 0.4375 0.85716V16.7755C0.4375 17.0122 0.633375 17.2041 0.875 17.2041H13.125C13.3666 17.2041 13.5625 17.0122 13.5625 16.7755V0.85716C13.5625 0.620467 13.3666 0.428589 13.125 0.428589Z" stroke="#717171" />
        <path d="M4.50688 4.19824H2.92117C2.72787 4.19824 2.57117 4.35174 2.57117 4.5411V5.81456C2.57117 6.00392 2.72787 6.15742 2.92117 6.15742H4.50688C4.70018 6.15742 4.85688 6.00392 4.85688 5.81456V4.5411C4.85688 4.35174 4.70018 4.19824 4.50688 4.19824Z" stroke="#717171" strokeWidth="0.6" />
        <path d="M4.50688 11.1952H2.92117C2.72787 11.1952 2.57117 11.3487 2.57117 11.538V12.8115C2.57117 13.0009 2.72787 13.1544 2.92117 13.1544H4.50688C4.70018 13.1544 4.85688 13.0009 4.85688 12.8115V11.538C4.85688 11.3487 4.70018 11.1952 4.50688 11.1952Z" stroke="#717171" strokeWidth="0.6" />
      </g>
    </svg>
  </React.Fragment>
);

ExamSVG.defaultProps = {
  width: 16,
  height: 17,
};

ExamSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};