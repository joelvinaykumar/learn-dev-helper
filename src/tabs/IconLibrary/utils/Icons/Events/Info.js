import React from 'react';
import PropTypes from 'prop-types';

export const InfoSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M-4-4h24v24H-4z" />
        <path
          d="M7.75 15.5a7.75 7.75 0 100-15.5 7.751 7.751 0 000 15.5zm0-1A6.748 6.748 0 011 7.75 6.75 6.75 0 017.75 1c3.707 0 6.75 3.002 6.75 6.75 0 3.728-3.02 6.75-6.75 6.75zm0-9.25a1 1 0 100-2 1 1 0 000 2zm1.125 6.5a.375.375 0 00.375-.375v-.25a.375.375 0 00-.375-.375H8.5V6.375A.375.375 0 008.125 6h-1.5a.375.375 0 00-.375.375v.25c0 .207.168.375.375.375H7v3.75h-.375a.375.375 0 00-.375.375v.25c0 .207.168.375.375.375h2.25z"
          fill={props.color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  </React.Fragment>
);

InfoSVG.defaultProps = {
  width: 19,
  height: 16,
  color: '#F36',
};

InfoSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
