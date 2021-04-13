import React from 'react';
import PropTypes from 'prop-types';

export const MoreActionSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 23 5" {...props}>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" opacity="0.7">
        <g id="1.2-All-Tiles-State" transform="translate(-995.000000, -78.000000)" fill={props.color} fillRule="nonzero">
          <g id="Group-12-Copy" transform="translate(995.000000, 78.000000)">
            <circle id="Oval-3" cx="2.5" cy="2.5" r="2.5" />
            <circle id="Oval-3-Copy" cx="11.5" cy="2.5" r="2.5" />
            <circle id="Oval-3-Copy-2" cx="20.5" cy="2.5" r="2.5" />
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

MoreActionSVG.defaultProps = {
  width: 23,
  height: 5,
  color: '#FFFFFF',
};

MoreActionSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
