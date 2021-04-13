import React from 'react';
import PropTypes from 'prop-types';

export const TimeSVG = props => (
  <React.Fragment>
    <svg height={props.height} width={props.width} viewBox="0 0 20 21" fill="none" {...props}>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <g id="1.5-Category-View" transform="translate(-397.000000, -810.000000)" stroke={props.color} strokeWidth="1.3">
          <g id="Group-7" transform="translate(243.000000, 407.000000)">
            <g id="Group-5" transform="translate(0.000000, 70.000000)">
              <g id="thin-0844_stopwatch_training_time-copy" transform="translate(155.000000, 334.000000)">
                <g id="Group" transform="translate(0.089600, 0.089231)">
                  <ellipse id="Oval" cx="8.7971072" cy="10.4360738" rx="8.27887275" ry="8.24475651" />
                  <ellipse id="Oval" cx="8.80933381" cy="10.4484166" rx={1} ry={1} />
                  <path d="M8.79685632,9.47325005 L8.79685632,5.39242919" id="Shape" />
                  <path d="M8.7971072,2.19131733 L8.7971072,0.154238359" id="Shape" />
                  <path d="M14.6512247,4.60616369 L17.0069879,2.26002503" id="Shape" />
                  <path d="M16.2084369,1.46468144 L17.8056226,3.05528533" id="Shape" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

TimeSVG.defaultProps = {
  width: 20,
  height: 21,
  color: '#FF3366',
};

TimeSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
