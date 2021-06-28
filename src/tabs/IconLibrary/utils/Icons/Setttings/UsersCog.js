import React from 'react';
import PropTypes from 'prop-types';

export const UsersCogSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.316 9.48a7.528 7.528 0 011.11-2.039c-.29.118-.602.184-.93.184a2.502 2.502 0 01-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 .328-.066.64-.184.93a7.422 7.422 0 012.04-1.11A4.358 4.358 0 0012.5.75a4.373 4.373 0 00-4.375 4.375c0 2.355 1.863 4.258 4.191 4.355zM3.75 8.25a3.124 3.124 0 100-6.25 3.124 3.124 0 100 6.25zm0-1.875c-.687 0-1.25-.562-1.25-1.25 0-.687.563-1.25 1.25-1.25S5 4.438 5 5.125c0 .688-.563 1.25-1.25 1.25zm16.914 11.36a.284.284 0 00.223-.278v-1.164a4.586 4.586 0 001.441-.832l1.008.582a.286.286 0 00.351-.055 5.861 5.861 0 001.297-2.242.288.288 0 00-.129-.332l-1.007-.582a4.583 4.583 0 000-1.664l1.007-.582a.283.283 0 00.13-.332 5.861 5.861 0 00-1.298-2.242.285.285 0 00-.351-.055l-1.008.582a4.586 4.586 0 00-1.441-.832V6.543a.284.284 0 00-.223-.277 5.894 5.894 0 00-2.586 0 .284.284 0 00-.223.277v1.164a4.586 4.586 0 00-1.441.832l-1.008-.582a.286.286 0 00-.351.055 5.862 5.862 0 00-1.297 2.242.288.288 0 00.129.332l1.007.582a4.583 4.583 0 000 1.664l-1.007.582a.283.283 0 00-.13.332c.263.844.712 1.606 1.298 2.242.09.098.234.121.351.055l1.008-.582c.426.363.914.644 1.441.832v1.164c0 .133.094.25.223.277a5.894 5.894 0 002.586 0zM.937 13.718a.94.94 0 00.938-.938 1.41 1.41 0 011.406-1.406h.938c.172 0 .332.043.48.098a5.796 5.796 0 011.348-1.414A3.27 3.27 0 004.219 9.5H3.28A3.286 3.286 0 000 12.781a.94.94 0 00.937.938zm18.438.176A1.896 1.896 0 0117.48 12c0-1.043.852-1.895 1.895-1.895 1.043 0 1.894.852 1.894 1.895a1.896 1.896 0 01-1.894 1.895zm-4.14 4.355a7.512 7.512 0 01-1.942-1.875H6.875v-1.75A2.632 2.632 0 019.43 12a7.94 7.94 0 002.476.594c-.027-.364-.078-.938.09-1.899-.656-.058-1.293-.191-1.875-.437a1.626 1.626 0 00-.621-.133 4.501 4.501 0 00-4.5 4.5v1.75c0 1.035.84 1.875 1.875 1.875h8.36z"
        fill={props.color}
        fillRule="nonzero"
      />
    </svg>
  </React.Fragment>
);

UsersCogSVG.defaultProps = {
  width: 26,
  height: 20,
  color: '#FF3366',
};

UsersCogSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
