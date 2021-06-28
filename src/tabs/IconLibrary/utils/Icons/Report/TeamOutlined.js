import React from 'react';
import PropTypes from 'prop-types';

export const TeamOutlinedSVG = props => (
  <svg width={props.width} height={props.height} {...props}>
    <g fillRule="nonzero" fill="none">
      <path
        d="M20.497 34.598c5.454 0 10.809-4.096 9.875-8.987-.675-3.539-6.149-.47-7.075-1.838-1.738-2.568.758-7.148-2.8-7.148-5.455 0-10.88 4.108-9.876 8.986.57 2.765 4.521.458 5.162 1.65 1.606 2.984.815 7.337 4.714 7.337z"
        fill="#F36"
      />
      <path
        d="M53.373 15.372a8.424 8.424 0 002.82-6.285c0-4.662-3.791-8.453-8.452-8.453s-8.453 3.792-8.453 8.453a8.423 8.423 0 002.824 6.287 11.75 11.75 0 00-4.55 4.463 11.721 11.721 0 00-2.178-1.547 8.424 8.424 0 002.82-6.285c0-4.661-3.791-8.453-8.453-8.453-4.66 0-8.452 3.792-8.452 8.453a8.424 8.424 0 002.822 6.287c-.792.434-1.52.954-2.18 1.544a11.77 11.77 0 00-4.553-4.46 8.425 8.425 0 002.826-6.29c0-4.66-3.792-8.452-8.453-8.452-4.662 0-8.454 3.792-8.454 8.453a8.429 8.429 0 002.822 6.287A11.75 11.75 0 00.026 25.667a.676.676 0 101.353 0c0-4.02 2.334-7.678 5.96-9.389a8.387 8.387 0 004.421 1.262 8.392 8.392 0 004.421-1.263c2.042.962 3.71 2.57 4.761 4.562a11.743 11.743 0 00-2.924 7.747.676.676 0 101.352 0c0-4.022 2.334-7.68 5.96-9.39a8.387 8.387 0 004.42 1.262 8.396 8.396 0 004.423-1.262 10.41 10.41 0 015.96 9.39.676.676 0 101.351 0c0-2.898-1.08-5.637-2.926-7.743a10.397 10.397 0 014.765-4.564 8.393 8.393 0 004.418 1.26 8.388 8.388 0 004.422-1.262 10.41 10.41 0 015.959 9.39.676.676 0 101.352 0c0-4.296-2.369-8.25-6.101-10.295zM4.659 9.087c0-3.916 3.186-7.1 7.1-7.1 3.916 0 7.101 3.185 7.101 7.1 0 3.915-3.185 7.1-7.1 7.1-3.915 0-7.1-3.185-7.1-7.1zm17.99 2.918c0-3.915 3.186-7.1 7.101-7.1 3.916 0 7.1 3.186 7.1 7.1 0 3.915-3.184 7.1-7.1 7.1-3.915 0-7.1-3.185-7.1-7.1zm17.99-2.918c0-3.916 3.186-7.1 7.102-7.1 3.914 0 7.1 3.185 7.1 7.1 0 3.915-3.186 7.1-7.1 7.1a7.109 7.109 0 01-7.101-7.1z"
        fill="#000"
      />
    </g>
  </svg>
);

TeamOutlinedSVG.defaultProps = {
  width: 40,
  height: 40,
};

TeamOutlinedSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
