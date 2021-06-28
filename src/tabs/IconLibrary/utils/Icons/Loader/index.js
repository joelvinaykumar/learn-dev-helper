import React from 'react';

export function LoaderSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto',
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <circle cx={50} cy={50} fill="none" stroke="#ff3366" strokeWidth={3} r={25} strokeDasharray="117.80972450961724 41.269908169872416" transform="rotate(60.228 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
      </circle>
      {/* [ldio] generated by https://loading.io/ */}
    </svg>
  );
}
