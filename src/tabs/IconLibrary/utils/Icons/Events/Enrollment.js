import React from 'react';
import PropTypes from 'prop-types';

export const EnrollmentSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 14 15" fill="none" {...props}>
      <g id="ILT-learner" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="all-public" transform="translate(-270.000000, -667.000000)" fill={props.color} fillRule="nonzero">
          <g id="events-list" transform="translate(250.000000, 397.000000)">
            <g id="assigned-upcoming-copy-2">
              <g id="assigned" transform="translate(20.000000, 269.000000)">
                <path d="M6.78123383,15.5312463 C10.5273187,15.5312463 13.5624677,12.4960973 13.5624677,8.75001252 C13.5624677,5.0039277 10.5273187,1.96877868 6.78123383,1.96877868 C3.03514901,1.96877868 0,5.0039277 0,8.75001252 C0,12.4960973 3.03514901,15.5312463 6.78123383,15.5312463 Z M11.1179316,12.7449142 C10.9319998,11.4761832 9.8519243,10.5000083 8.53122966,10.5000083 C7.97068412,10.5000083 7.69997096,10.811737 6.78123383,10.811737 C5.8624967,10.811737 5.59450723,10.5000083 5.031238,10.5000083 C3.71054337,10.5000083 2.63046782,11.4761832 2.4445361,12.7449142 C1.47383529,11.6921823 0.874997914,10.292207 0.874997914,8.75001252 C0.874997914,5.49339034 3.52461165,2.8437766 6.78123383,2.8437766 C10.037856,2.8437766 12.6874698,5.49339034 12.6874698,8.75001252 C12.6874698,10.292207 12.0886324,11.6921823 11.1179316,12.7449142 Z M6.78123383,9.84375991 C8.11012623,9.84375991 9.1874781,8.76640805 9.1874781,7.43751565 C9.1874781,6.10862325 8.11012623,5.03127138 6.78123383,5.03127138 C5.45234143,5.03127138 4.37498957,6.10862325 4.37498957,7.43751565 C4.37498957,8.76640805 5.45234143,9.84375991 6.78123383,9.84375991 Z M6.78123383,8.968762 C5.93630329,8.968762 5.24998748,8.28244619 5.24998748,7.43751565 C5.24998748,6.5925851 5.93630329,5.9062693 6.78123383,5.9062693 C7.62616437,5.9062693 8.31248018,6.5925851 8.31248018,7.43751565 C8.31248018,8.28244619 7.62616437,8.968762 6.78123383,8.968762 Z M6.78124218,14.6562484 C5.47146065,14.6562484 4.26289114,14.2214732 3.28124218,13.4968655 L3.28124218,13.1250021 C3.28124218,12.1597754 4.06601127,11.3750063 5.031238,11.3750063 C5.33474222,11.3750063 5.78318934,11.6867349 6.78124218,11.6867349 C7.78200202,11.6867349 8.22497505,11.3750063 8.53122966,11.3750063 C9.49645639,11.3750063 10.2812255,12.1597754 10.2812255,13.1250021 L10.2812255,13.4968655 C9.29957652,14.2214732 8.09100702,14.6562484 6.78124218,14.6562484 Z" id="u" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

EnrollmentSVG.defaultProps = {
  width: 14,
  height: 15,
  color: '#F36',
};

EnrollmentSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};