import React from 'react';
import PropTypes from 'prop-types';

export const SearchSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 23 24" {...props}>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinecap="round">
        <g id="1.5-Category-View" transform="translate(-93.000000, -296.000000)" fillRule="nonzero" stroke="#000000" strokeWidth={2}>
          <g id="Group-4" transform="translate(94.000000, 297.000000)">
            <circle id="Oval-6" cx="8.55555556" cy="8.55555556" r="8.55555556" />
            <path d="M14.5918516,15.4066664 L20.3773925,21.1922074" id="Line-3" />
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

SearchSVG.defaultProps = {
  width: 23,
  height: 24,
};

SearchSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
