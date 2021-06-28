import React from 'react';
import PropTypes from 'prop-types';

export const GreenStatsSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Learner-Side" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="Event-Homepage_learner-side-_Completed-events" transform="translate(-549.000000, -507.000000)" stroke="#14C855" strokeWidth="1.5">
          <g id="Group-13-Copy" transform="translate(520.000000, 463.000000)">
            <g id="thin-0003_write_pencil_new_edit" transform="translate(30.000000, 45.000000)">
              <g id="Group">
                <line x1="14.5" y1="21.4347826" x2="4.41304348" y2="21.4347826" id="Shape" />
                <line x1="14.5" y1="17.6521739" x2="4.41304348" y2="17.6521739" id="Shape" />
                <line x1="14.5" y1="13.8695652" x2="4.41304348" y2="13.8695652" id="Shape" />
                <line x1="8.19565217" y1="10.0869565" x2="4.41304348" y2="10.0869565" id="Shape" />
                <path d="M22.6956522,21.4347826 C22.6956522,21.5420826 25.2238217,28.5100261 25.2238217,28.5100261 C25.4212739,29.1296174 26.2127217,29.1845913 26.4300957,28.5102783 C26.4300957,28.5102783 29,21.5423348 29,21.4346565" id="Shape" />
                <line x1="24.5718261" y1="26.6375087" x2="27.0319087" y2="26.6375087" id="Shape" />
                <path d="M17.9034652,29 L1.1154913,29 C0.57003913,29 0,28.5513826 0,27.9991217 L0,1.00087826 C0,0.448617391 0.57003913,0 1.1154913,0 L13.9529087,0 L18.9130435,5.00111304 L18.9130435,27.9991217 C18.9130435,28.5513826 18.4487913,29 17.9034652,29 L17.9034652,29 Z" id="Shape" />
                <polyline id="Shape" points="13.9529087 0.00100869565 13.9529087 5.00111304 18.8909783 5.00111304" />
                <path d="M26.6043478,0 L25.1854913,0 C23.7928609,0 22.6956522,1.1299913 22.6956522,2.52274783 L22.6956522,21.4347826 L29,21.4347826 L29,2.52274783 C29,1.1299913 27.9971043,0 26.6043478,0 L26.6043478,0 Z" id="Shape" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

GreenStatsSVG.defaultProps = {
  width: 20,
  height: 21,
};

GreenStatsSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
