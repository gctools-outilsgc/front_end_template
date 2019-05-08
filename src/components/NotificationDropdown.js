/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NotificationDropdown = (props) => {
  const {
    userObject,
    accessToken,
  } = props;
  //TODO query the notification COUNT on component render
  //TODO query the notification LIST on dropdown click
  //TODO map the DropdownItems based on that query
  //TODO mutate the notifications on dropdown click
  //TODO display something when all messages are read / deleted / it fetches nothing 
  return (
    <div>
      {userObject ? (
        <div className="query-maybe-it-might-get-mad">
          <UncontrolledDropdown direction="left">
            <DropdownToggle caret>
              {userObject.gcID} / {accessToken} / Add count
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                You've got Mail!
              </DropdownItem>
              <DropdownItem>
                You've got Mail!
              </DropdownItem>
              <DropdownItem>
                You've got Mail!
              </DropdownItem>
              <DropdownItem>
                You've got Mail!
              </DropdownItem>
              <DropdownItem>
                You've got Mail!
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      ) : ''}
    </div>
  );
};

NotificationDropdown.defaultProps = {
  userObject: null,
  accessToken: '',
};

NotificationDropdown.propTypes = {
  userObject: PropTypes.shape({
    gcID: PropTypes.string,
    name: PropTypes.string,
  }),
  accessToken: PropTypes.string,
};

export default NotificationDropdown;
