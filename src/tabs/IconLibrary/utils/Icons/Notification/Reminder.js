import React from 'react';
import PropTypes from 'prop-types';

export const ReminderSVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 19 14" {...props}>
      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <g id="Assets" transform="translate(-609.000000, -7561.000000)">
          <g id="Group-29" transform="translate(606.000000, 7555.000000)">
            <polygon id="Path" points="0 0 24 0 24 24 0 24" />
            <path d="M10.0899259,12.5018489 C10.3623804,13.2518357 10.2569234,12.9617859 10.5440264,13.7527996 C11.2119878,15.5867968 10.8868047,16.3602153 10.6407001,16.9227197 L3.51279311,14.3270342 C2.853615,14.0867947 2.83604836,13.1991072 3.4249027,12.8973558 C4.04013561,12.5838743 5.12998248,12.1678539 5.98545491,9.82119127 C6.00593979,9.75673258 6.41317682,8.63467066 6.43660855,8.5731302 C7.17489376,6.54578557 9.41609935,5.49991251 11.4463622,6.23525088 C11.736412,6.34070793 12.0000833,6.48427372 12.2491061,6.64832438 C10.2364099,7.79676487 9.27253356,10.2547783 10.0899259,12.5018489 Z M7.04597637,18.0770252 C6.23447776,17.7811103 5.75986379,16.9842601 5.82724072,16.1668678 L9.20810348,17.3973336 C8.73054267,18.0682419 7.85458536,18.3729115 7.04597637,18.0770252 Z M17.704177,19.014523 C16.895568,19.3074911 16.0196107,19.0027928 15.5420499,18.3348314 L18.9229126,17.1043656 C18.9902896,17.9246761 18.5127574,18.7186081 17.704177,19.014523 Z M21.3281689,13.8348536 C21.9668621,14.1629549 21.8379447,15.0448059 21.2373602,15.2645319 L12.430752,18.4695853 C11.7715739,18.7098248 11.1856378,18.0389451 11.443444,17.4324955 C11.7129803,16.7967491 12.284268,15.777226 11.4287956,13.4305348 C11.4053639,13.3661047 10.9952086,12.2440142 10.9717483,12.1825023 C10.2334917,10.1551577 11.2793647,7.91395209 13.3067094,7.17566688 C15.334054,6.43741027 17.5752596,7.48328333 18.316463,9.51062797 C18.3369765,9.57216843 18.7442136,10.6942303 18.7676453,10.758689 C19.6201709,13.1053517 20.712936,13.521372 21.3281689,13.8348536 Z" id="b" fill="#292929" fillRule="nonzero" />
          </g>
        </g>
      </g>
    </svg>
  </React.Fragment>
);

ReminderSVG.defaultProps = {
  width: 19,
  height: 14,
};

ReminderSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};