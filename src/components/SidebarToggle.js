/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Button
} from 'reactstrap';

const SidebarToggle = (props) => {
  const {
    minimized,
    onResultClick,
  } = props;

  const status = (minimized ? false : true);

  return (
    <div>
      <Button onClick={() => onResultClick(status)}>
        Toggle
      </Button>
    </div>
  );
};

SidebarToggle.defaultProps = {
  minimized: false,
  onResultClick: () => {},
};

SidebarToggle.propTypes = {
  /** Gets the current status of sidebar */
  minimized: PropTypes.bool,
  /** Gets the value of the option clicked */
  onResultClick: PropTypes.func,
};

export default SidebarToggle;
