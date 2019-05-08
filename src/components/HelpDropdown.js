import React from 'react';
import PropTypes from 'prop-types';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const HelpDropdown = (props) => {
  const {
    currentApp,
    windowLocation,
  } = props;
  return (
    <UncontrolledDropdown direction="left">
      <DropdownToggle caret>
        Help
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          A bug for {currentApp.name}
        </DropdownItem>
        <DropdownItem>
          Help Link
        </DropdownItem>
        <DropdownItem>
          <span>
            {windowLocation}
          </span>
        </DropdownItem>
        <DropdownItem>
          Hardcoded link example
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

HelpDropdown.defaultProps = {
  currentApp: {
    name: 'Google',
    id: '1',
  },
  windowLocation: 'google.ca',
};

HelpDropdown.propTypes = {
  /** Current app object name and ID */
  currentApp: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  /** The current URL of the page (might not be needed) */
  windowLocation: PropTypes.string,
};

export default HelpDropdown;
