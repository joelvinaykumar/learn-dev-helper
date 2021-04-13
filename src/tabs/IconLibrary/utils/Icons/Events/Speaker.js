import React from 'react';
import PropTypes from 'prop-types';

export const SpeakerSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Learner-Side" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="Event-Homepage_learner-side-_Completed-events" transform="translate(-988.000000, -504.000000)" stroke="#FF9001" strokeWidth="1.5">
          <g id="Group-13-Copy-2" transform="translate(959.000000, 463.000000)">
            <g id="thin-0613_voice_laud_announcement_news" transform="translate(30.000000, 41.000000)">
              <g id="Group">
                <path d="M8.56954097,24.6662071 L15.9643573,29.8805797 C16.2970646,30.1331563 16.2391526,30.6024727 15.9643573,30.8779847 L15.1300806,31.711688 C14.8552854,31.9872 14.4969191,31.9182503 14.1336791,31.711688 L6.66374914,26.5721423" id="Shape" />
                <polygon id="Shape" points="5.23917154 21.335551 5.23702134 21.3342609 3.27217075 23.3135895 0.378578129 25.2649655 4.64500026 29.5309576 6.66374914 26.5719989 8.5705444 24.6666372 8.56954097 24.6662071 25.9996163 15.569581 14.3350809 3.90504559" />
                <path d="M29.383024,10.6788848 C29.5659341,5.11388669 25.0409149,0.597898287 19.4846609,0.780378393" id="Shape" />
                <path d="M20.5709407,5.14513623 C23.1022967,4.97856759 25.1848348,7.06282582 25.0184095,9.59260501" id="Shape" />
                <line x1="5.23902819" y1="21.335551" x2="8.56939763" y2="24.6662071" id="Shape" />
                <line x1="3.27217075" y1="23.3135895" x2="6.66374914" y2="26.5719989" id="Shape" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

SpeakerSVG.defaultProps = {
  width: 20,
  height: 21,
};

SpeakerSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
