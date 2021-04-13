import React from 'react';
import PropTypes from 'prop-types';

export const LocationSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="ILT-learner" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="upcoming" transform="translate(-594.000000, -618.000000)" fill={props.color} fillRule="nonzero">
          <g id="events-list" transform="translate(246.000000, 397.000000)">
            <g id="assigned-upcoming-copy" transform="translate(329.000000, 0.000000)">
              <g id="Group-Copy" transform="translate(19.000000, 218.000000)">
                <path d="M5.78957131,17.4675334 C9.76252326,11.707896 10.499975,11.1167757 10.499975,9.00001669 C10.499975,6.10051799 8.14948619,3.75002921 5.24998748,3.75002921 C2.35048878,3.75002921 0,6.10051799 0,9.00001669 C0,11.1167757 0.737451702,11.707896 4.71043036,17.4675334 C4.97112996,17.8441233 5.5288183,17.8441767 5.78957131,17.4675334 Z M5.24998748,16.7090399 C1.44115104,11.2008629 0.874997914,10.7635241 0.874997914,9.00001669 C0.874997914,7.8313946 1.33006732,6.73276059 2.15641271,5.90644191 C2.98273138,5.08009653 4.08136539,4.62502712 5.24998748,4.62502712 C6.41860957,4.62502712 7.51724358,5.08009653 8.34356226,5.90644191 C9.16990764,6.73276059 9.62497705,7.8313946 9.62497705,9.00001669 C9.62497705,10.7634173 9.05917106,11.2003555 5.24998748,16.7090399 Z M5.24998748,11.6250104 C6.69741369,11.6250104 7.87498122,10.4474429 7.87498122,9.00001669 C7.87498122,7.55259048 6.69741369,6.37502295 5.24998748,6.37502295 C3.80256128,6.37502295 2.62499374,7.55259048 2.62499374,9.00001669 C2.62499374,10.4474429 3.80256128,11.6250104 5.24998748,11.6250104 Z M5.24998748,10.7500209 C4.28502778,10.7500209 3.49999166,9.96497639 3.49999166,9.00001669 C3.49999166,8.03505698 4.28502778,7.25002086 5.24998748,7.25002086 C6.21494719,7.25002086 6.99999166,8.03505698 6.99999166,9.00001669 C6.99999166,9.96497639 6.21494719,10.7500209 5.24998748,10.7500209 Z" id="m" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

LocationSVG.defaultProps = {
  width: 11,
  height: 15,
  color: '#FF3366',
};

LocationSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
