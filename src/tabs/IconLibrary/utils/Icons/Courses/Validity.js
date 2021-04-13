import React from 'react';
import PropTypes from 'prop-types';

export const CourseValiditySVG = props => (
  <React.Fragment>
    <svg width={props.width} height={props.height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6284 1.22685H19.6755C20.0166 1.22685 20.2931 1.50346 20.293 1.8445V15.8004C20.293 16.1415 20.0164 16.4181 19.6754 16.4181H15.8845C15.277 19.0135 12.945 20.953 10.167 20.953C7.38906 20.953 5.05703 19.0136 4.44957 16.4181H0.658663C0.317619 16.4181 0.0410156 16.1415 0.0410156 15.8004V1.8445C0.0410156 1.50346 0.317619 1.22685 0.658663 1.22685H4.85907V0.617647C4.85907 0.276603 5.13568 0 5.47672 0C5.81777 0 6.09437 0.276603 6.09437 0.617647V1.22685H9.54938V0.617647C9.54938 0.276603 9.82599 0 10.167 0C10.5081 0 10.7847 0.276603 10.7847 0.617647V1.22685H14.3931V0.617647C14.3931 0.276603 14.6697 0 15.0107 0C15.3518 0 15.6284 0.276603 15.6284 0.617647V1.22685ZM4.85907 3.02029V2.46215H1.27631V4.98791H19.0579V2.46215H15.6284V3.02029C15.6284 3.36134 15.3518 3.63794 15.0107 3.63794C14.6697 3.63794 14.3931 3.36134 14.3931 3.02029V2.46215H10.7847V3.02029C10.7847 3.36134 10.5081 3.63794 10.167 3.63794C9.82599 3.63794 9.54938 3.36134 9.54938 3.02029V2.46215H6.09437V3.02029C6.09437 3.36134 5.81777 3.63794 5.47672 3.63794C5.13568 3.63794 4.85907 3.36134 4.85907 3.02029ZM10.167 19.7177C7.60977 19.7177 5.52922 17.6371 5.52922 15.0799C5.52922 12.5226 7.60977 10.442 10.167 10.442C12.7243 10.442 14.8048 12.5225 14.8048 15.0799C14.8048 17.6372 12.7244 19.7177 10.167 19.7177ZM16.0388 15.141C16.0383 15.1549 16.0378 15.1688 16.0376 15.1828H19.0578V6.22331H1.27621V15.1828H4.2965C4.29628 15.1681 4.29578 15.1534 4.29527 15.1387C4.2946 15.1191 4.29393 15.0996 4.29393 15.0799C4.29393 11.8414 6.9286 9.20675 10.167 9.20675C13.4055 9.20675 16.0401 11.8414 16.0401 15.0799C16.0401 15.1003 16.0394 15.1207 16.0388 15.141Z" fill="#FF3366" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7861 15.2357V12.2478C10.7861 11.9067 10.5095 11.6301 10.1684 11.6301C9.82738 11.6301 9.55078 11.9067 9.55078 12.2478V15.4917C9.55078 15.6554 9.61584 15.8125 9.73165 15.9284L11.1512 17.3481C11.2719 17.4686 11.4299 17.529 11.588 17.529C11.746 17.529 11.9041 17.4686 12.0248 17.3481C12.266 17.1069 12.266 16.7158 12.0248 16.4746L10.7861 15.2357Z" fill="#FF3366" />
    </svg>
  </React.Fragment>
);

CourseValiditySVG.defaultProps = {
  width: 21,
  height: 21,
};

CourseValiditySVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};