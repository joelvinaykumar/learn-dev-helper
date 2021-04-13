import React from 'react';
import PropTypes from 'prop-types';

export const SelectionSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 25 25" {...props}>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fillOpacity="0.105701" opacity="0.6">
        <g id="1.2-All-Tiles-State" transform="translate(-1078.000000, -73.000000)" fill="#000000" fillRule="nonzero" stroke="#FFFFFF">
          <circle id="Oval-2-Copy-2" cx="1090.5" cy="85.5" r={12} />
        </g>
      </g>
    </svg>
  </React.Fragment>
);

SelectionSVG.defaultProps = {
  width: 25,
  height: 25,
};

SelectionSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
