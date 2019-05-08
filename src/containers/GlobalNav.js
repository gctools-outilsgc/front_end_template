/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import '@gctools-components/aurora-css/css/aurora.min.css';
import '../assets/css/style.css';

import LoginDropdown from '../components/LoginDropdown';
import AppListDropdown from '../components/AppListDropdown';
import ToggleLangDropdown from '../components/ToggleLangDropdown';
import HelpDropdown from '../components/HelpDropdown';
import NotificationDropdown from '../components/NotificationDropdown';
import SidebarToggle from '../components/SidebarToggle';
import TopNavBar from '../components/TopNavBar';

/**
 * Global navigation react component for OADW apps.
 */

const GlobalNav = (props) => {
  const {
    currentLang,
    currentApp,
    onLanguageResultClick,
    currentUser,
    oidcConfig,
    doLogin,
    accessToken,
    minimized,
    onToggleResultClick,
  } = props;

  return (
    <div>
      <div>
        <TopNavBar
          currentApp={currentApp}
        />
      </div>
      <div className={"gn-holder " + (minimized ? 'gn-minimize' : 'show')}>
        <SidebarToggle
          minimized={minimized}
          onResultClick={(e) => {
            onToggleResultClick(e);
            console.log(e);
          }}
        />
        <LoginDropdown
          userObject={currentUser}
          oidcConfig={oidcConfig}
          doLogin={doLogin}
        />
        <NotificationDropdown
          userObject={currentUser}
          accessToken={accessToken}
        />
        <AppListDropdown
          currentApp={currentApp}
        />
        <ToggleLangDropdown
          currentLang={currentLang}
          onResultClick={(e) => {
            //TODO Send e to parent
            onLanguageResultClick(e);
            console.log(e);
          }}
        />
        <HelpDropdown
          currentApp={currentApp}
          //TODO this could just exist in this component
          windowLocation={window.location.href}
        />
      </div>
    </div>
  );
};

GlobalNav.defaultProps = {
  currentLang: 'en_CA',
  onLanguageResultClick: () => {},
  currentUser: null,
  currentApp: {},
  accessToken: '',
  oidcConfig: {
    authority: 'http://localhost:8080',
    client_id: 'js',
    redirect_uri: 'http://localhost:8081/#!callback',
    response_type: 'id_token token',
    scope: 'openid profile api1',
    post_logout_redirect_uri: 'http://localhost:8081/#!logout',
    silent_redirect_uri: 'http://localhost:8081/#!silent',
  },
  doLogin: () => {},
  minimized: false,
  onToggleResultClick: () => {},
};

GlobalNav.propTypes = {
  /** This is the current language of the app */
  currentLang: PropTypes.string,
  /** Function will pass the selected language to parent */
  onLanguageResultClick: PropTypes.func,
  /** Information about the current user */
  currentUser: PropTypes.shape({
    /** Logged in user's gcID */
    gcID: PropTypes.string,
    /** Logged in user's name */
    name: PropTypes.string,
    /** Logged in user's avatar */
    avatar: PropTypes.string,
  }),
  /** Logged in user's access token */
  accessToken: PropTypes.string,
  /** Information about the parent App */
  currentApp: PropTypes.shape({
    /** A unique client ID for the App */
    id: PropTypes.string,
    /** The name of the App */
    name: PropTypes.string,
    /** The home page URL of the App */
    homeLink: PropTypes.string,
    /** Logo / Icon / Image url for the App */
    logo: PropTypes.string,
  }),
  /** The Open ID config for the parent App */
  oidcConfig: PropTypes.shape({}),
  /** Login function from the parent App */
  doLogin: PropTypes.func,
  /** Display status for sidebar*/
  minimized: PropTypes.bool,
  /** Function will pass the sidebar status to parent */
  onToggleResultClick: PropTypes.func,
};

export default GlobalNav;
