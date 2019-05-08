/* eslint-disable */
import React from 'react'; import PropTypes from 'prop-types'; 
import { Row, Col } from "reactstrap";
import FlagEN from "../assets/imgs/sig-en-w.png"
const TopNavBar = (props) => {
  const {
    currentApp,
  } = props;
  return (
    <div className= 'top_bar'>
      <div className = "containerGoC"><img className = "flag" src={FlagEN} alt="Government of Canada" /></div>
      <div className = "appName">App name</div>
</div>
  );
};
TopNavBar.defaultProps = {
  currentApp: {
    name: 'AppName',
    id: '1',
    home: '#',
    logo: ''
  },
};
TopNavBar.propTypes = {
  /** Current app object name, ID, home link and logo */
  currentApp: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    home: PropTypes.string,
    logo: PropTypes.string,
  }),
};
export default TopNavBar;
