import React from 'react';
import PropTypes from 'prop-types';

export const SelectionActiveSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 25 25" {...props}>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="1.2-All-Tiles-State" transform="translate(-1889.000000, -73.000000)" fillRule="nonzero" stroke="#FFFFFF">
          <g id="Group-4" transform="translate(1874.000000, 58.000000)">
            <g id="Group-6" transform="translate(15.000000, 15.000000)">
              <circle id="Oval-2-Copy" strokeOpacity="0.6" fill={props.color} cx="12.5" cy="12.5" r={12} />
              <polyline id="Path-5-Copy" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" points="8 12.9195558 11.0531544 16 17 10" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

SelectionActiveSVG.defaultProps = {
  width: 25,
  height: 25,
  color: '#2FD58F',
};

SelectionActiveSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
