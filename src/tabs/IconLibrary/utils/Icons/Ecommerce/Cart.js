import React from 'react';
import PropTypes from 'prop-types';

export const CartSVG = props => (
  <svg width={props.width} height={props.height} viewBox="0 0 29 24" fill="none" {...props}>
    <path d="M0.585223 0.0732136C-0.00339669 0.329952 -0.191254 1.13148 0.222032 1.61991C0.528866 1.9831 0.585223 1.98936 3.01485 1.98936H5.23156L7.15397 9.20309C8.23102 13.2545 9.12648 16.492 9.18283 16.5734C9.24545 16.661 9.37695 16.7863 9.47088 16.8551C9.63995 16.9866 9.68379 16.9866 16.885 17.0054C21.8507 17.018 24.2052 17.0054 24.3617 16.9553C24.8752 16.8113 24.8063 17.0054 26.4782 10.9126C28.1126 4.95751 28.1439 4.80722 27.8809 4.45655C27.812 4.36263 27.6743 4.22486 27.5803 4.15598C27.4113 4.02448 27.3987 4.02448 18.5256 4.02448C9.65248 4.02448 9.63995 4.02448 9.47088 4.15598C9.139 4.4002 9.03881 4.60058 9.03881 4.99508C9.03881 5.38958 9.139 5.58996 9.47088 5.83418C9.63995 5.96568 9.67126 5.96568 17.6865 5.98446C25.301 5.99699 25.7331 6.00325 25.7018 6.1097C25.6391 6.32261 23.2847 14.9578 23.2847 14.9891C23.2847 15.0016 20.4668 15.0141 17.0228 15.0141C13.5787 15.0141 10.7608 15.0016 10.7608 14.9766C10.7608 14.7887 6.9035 0.542856 6.82209 0.430141C6.76573 0.342474 6.63423 0.217237 6.5403 0.148355C6.37123 0.0231171 6.28983 0.0168552 3.57216 0.00433159C1.34292 -0.00819206 0.735509 0.00433159 0.585223 0.0732136Z" fill="black" />
    <path d="M11.4245 18.0888C10.3224 18.3643 9.30176 19.4163 9.0638 20.5246C8.8509 21.5203 9.36438 22.71 10.3162 23.4114C10.9048 23.8435 11.3557 24 12.0132 24C12.4139 24 12.6394 23.9624 12.9211 23.856C13.7289 23.5491 14.4991 22.7915 14.8373 21.9649C15.0377 21.4702 15.0439 20.6374 14.8436 20.1176C14.5367 19.3036 13.7665 18.5333 12.9525 18.2077C12.558 18.0512 11.8003 17.9886 11.4245 18.0888ZM12.3826 20.0613C12.6832 20.1239 12.9399 20.4119 12.99 20.7438C13.1278 21.6643 12.6519 22.1402 11.7314 22.0024C11.1929 21.921 10.9361 21.4514 11.0363 20.7438C11.0864 20.437 11.3494 20.1176 11.5936 20.0675C11.8253 20.0237 12.176 20.0237 12.3826 20.0613Z" fill="black" />
    <path d="M21.4436 18.0888C20.3416 18.3643 19.3209 19.4163 19.0829 20.5246C18.87 21.5203 19.3835 22.71 20.3353 23.4114C20.9239 23.8435 21.3748 24 22.0323 24C22.433 24 22.6585 23.9624 22.9402 23.856C23.748 23.5491 24.5182 22.7915 24.8564 21.9649C25.0568 21.4702 25.063 20.6374 24.8627 20.1176C24.5558 19.3036 23.7856 18.5333 22.9716 18.2077C22.5771 18.0512 21.8194 17.9886 21.4436 18.0888ZM22.4017 20.0613C22.7023 20.1239 22.959 20.4119 23.0091 20.7438C23.1469 21.6643 22.671 22.1402 21.7505 22.0024C21.212 21.921 20.9552 21.4514 21.0554 20.7438C21.1055 20.437 21.3685 20.1176 21.6127 20.0675C21.8444 20.0237 22.1951 20.0237 22.4017 20.0613Z" fill="black" />
  </svg>
);

CartSVG.defaultProps = {
  width: 29,
  height: 24,
};

CartSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
