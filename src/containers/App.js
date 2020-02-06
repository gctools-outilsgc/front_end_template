import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

// For more information on gctools-componets visit
// https://github.com/gctools-outilsgc/gctools-components
import Login from '@gctools-components/gc-login';

import { loginAction, logoutAction, clearErrorAction } from '../store';

// Config
import oidcConfig from '../oidcConfig.dev';

// Containers
import Home from './Home';
import Info from './Info';
import ProductPage from './examples/ProductPage';
import Blog from './examples/Blog';

// Assets
import enFip from '../assets/imgs/sig-en-w.png';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: false };
  }
  render() {
    const {
      onLogin,
      onLogout,
    } = this.props;

    const doLogin = (user) => {
      this.setState({ name: user.profile.name });
      onLogin(user);
    };

    const doLogout = () => {
      this.setState({ name: false });
      onLogout();
    };

    return (
      <BrowserRouter
        basename={process.env.PUBLIC_URL}
      >
        <div>
          <Navbar className="shadow-sm nav-bg">
            <div className="h-100 directory-fip">
              <img src={enFip} alt="Government of Canada" />
            </div>
            <NavbarBrand href="/" className="directory-brand">
              <span>App Title</span>
            </NavbarBrand>
            <Nav className="ml-auto">
              <NavItem className="mr-2">
                <Login
                  oidcConfig={oidcConfig}
                  onUserLoaded={doLogin}
                  onUserFetched={doLogin}
                  onLogoutClick={(e, oidc) => {
                    oidc.logout();
                    doLogout();
                  }}
                >
                  {({ onClick }) => (
                    <Button
                      color="light"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClick(e);
                      }}
                    >
                      {this.state.name || 'Login'}
                    </Button>
                  )}
                </Login>
              </NavItem>
              <NavItem>
                <Button color="light" onClick={() => {}}>
                  Language
                </Button>
              </NavItem>
            </Nav>
          </Navbar>
          <main>
            {/*
                Route to other container components using React router
                For more information visit:
                https://reacttraining.com/react-router/
            */}
            <Switch>
              <Fragment>
                <Route
                  exact
                  path="/"
                  component={Home}
                />
                <Route path="/info" component={Info} />
                <Route path="/product" component={ProductPage} />
                <Route path="/blog" component={Blog} />
              </Fragment>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {
  onLogin: () => {},
  onLogout: () => {},
};

App.propTypes = {
  /** Login event callback  */
  onLogin: PropTypes.func,
  /** Logout event callback */
  onLogout: PropTypes.func,
};

const mapStToProps = ({ showError }) => ({ showError: showError || [] });

const mapDispToProps = dispatch => ({
  onLogin: profile => dispatch(loginAction(profile)),
  onLogout: () => dispatch(logoutAction()),
  onErrorClose: () => dispatch(clearErrorAction()),
});

export default connect(mapStToProps, mapDispToProps)(App);
