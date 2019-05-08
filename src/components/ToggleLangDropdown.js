/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const ToggleLangDropdown = (props) => {
  const {
    currentLang,
    onResultClick,
  } = props;
  return (
    <UncontrolledDropdown direction="left">
      <DropdownToggle caret>
        {(currentLang == 'en_CA') ? 'EN' : 'FR'}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => onResultClick('en_CA')}>
          <span>{(currentLang == 'en_CA') ? '$Sel ' : ''}</span>English
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => onResultClick('fr_CA')}>
          <span>{(currentLang == 'fr_CA') ? '$Sel ' : ''}</span>French
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

ToggleLangDropdown.defaultProps = {
  currentLang: 'en_CA',
  onResultClick: () => {},
};

ToggleLangDropdown.propTypes = {
  /** Gets the current language of the application */
  currentLang: PropTypes.string,
  /** Gets the value of the option clicked */
  onResultClick: PropTypes.func,
};

export default ToggleLangDropdown;
