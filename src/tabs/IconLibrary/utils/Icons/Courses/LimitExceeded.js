import React from 'react';
import PropTypes from 'prop-types';

export const AssesmentLimitExceededSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 -2 512 512" {...props}>
      <path d="m448 508.800781-148.59375-92.800781h-267.40625c-17.671875 0-32-14.328125-32-32v-352c0-17.671875 14.328125-32 32-32h448c17.671875 0 32 14.328125 32 32v352c0 17.671875-14.328125 32-32 32h-32zm0 0" fill="#FF3366" />
      <g fill="#fff">
        <path d="m272 256h-32v-144c0-8.835938 7.164062-16 16-16s16 7.164062 16 16zm0 0" />
        <path d="m240 288h32v32h-32zm0 0" />
      </g>
    </svg>
  </React.Fragment>
);

AssesmentLimitExceededSVG.defaultProps = {
  width: '512pt',
  height: '512pt',
};

AssesmentLimitExceededSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
