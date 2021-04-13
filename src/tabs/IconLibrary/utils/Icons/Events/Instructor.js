import React from 'react';
import PropTypes from 'prop-types';

export const InstructorSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="learner-as-instructor-detailed-copy-3" transform="translate(-422.000000, -144.000000)" fill="#FF3366" fillRule="nonzero">
          <g id="Group-7" transform="translate(421.000000, 144.000000)">
            <g id="instructor" transform="translate(1.000000, 0.000000)">
              <g id="Group-2">
                <g id="instructor-copy">
                  <path d="M17.575,12.1875 C18.36082,12.1875 19,11.5356445 19,10.7346725 L19,1.45282745 C19,0.651855469 18.36082,0 17.575,0 L6.175,0 C5.38917999,0 4.75,0.651855469 4.75,1.45282745 L4.75,2.8125 C5.03768463,2.8125 5.70800171,2.90419579 6.175,3.09139252 L6.175,1.40625 L17.575,1.40625 L17.575,10.78125 L16.15,10.78125 L16.15,9.375 C16.15,8.85732651 15.7245758,8.4375 15.2,8.4375 L11.4,8.4375 C10.8754242,8.4375 10.45,8.85732651 10.45,9.375 L10.45,12.1875 L17.575,12.1875 Z M4.75,9.375 C6.32401733,9.375 7.6,8.11580658 7.6,6.5625 C7.6,5.00919342 6.32401733,3.75 4.75,3.75 C3.17598267,3.75 1.9,5.00919342 1.9,6.5625 C1.9,8.11580658 3.17598267,9.375 4.75,9.375 Z M4.75,7.96875 C3.96417999,7.96875 3.325,7.33798027 3.325,6.5625 C3.325,5.78701973 3.96417999,5.15625 4.75,5.15625 C5.53582001,5.15625 6.175,5.78701973 6.175,6.5625 C6.175,7.33798027 5.53582001,7.96875 4.75,7.96875 Z M14.725,10.78125 L11.875,10.78125 L11.875,9.84375 L14.725,9.84375 L14.725,10.78125 Z M8.3125,15 C8.96829224,15 9.5,14.4752884 9.5,13.828125 L9.5,12.7344704 C9.5,11.4829159 8.59215393,10.0201035 6.73282928,10.0201035 C5.9078125,10.0201035 5.70057983,10.3125 4.75,10.3125 C3.80089874,10.3125 3.59366608,10.0201035 2.76717072,10.0201035 C0.627003479,10.0201035 0,11.8066406 0,12.7344704 L0,13.828125 C0,14.4752884 0.531707764,15 1.1875,15 L8.3125,15 Z M8.075,13.59375 L1.425,13.59375 L1.425,12.7344704 C1.425,12.324028 1.66696472,11.4263535 2.76717072,11.4263535 C3.27899017,11.4263535 3.64472046,11.71875 4.75,11.71875 C5.85942535,11.71875 6.21924133,11.4263535 6.73282928,11.4263535 C7.83184662,11.4263535 8.075,12.3222542 8.075,12.7344704 L8.075,13.59375 Z" id="" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

InstructorSVG.defaultProps = {
  width: 19,
  height: 16,
  color: '#F36',
};

InstructorSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};