import React from 'react';
import { Row, Col } from 'reactstrap';

import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

import config from '../../assets/imgs/config.png';

import FileCode from './ConfigFileCode';
import BackendCode from './BackendCodeExample';

export function ConfigSection() {
  return (
    <Row className="flex mt-5">
      <Col md="7" className="align-self-center">
        <h2>Configuration</h2>
        <p>
          To get started with the front-end template, you will need to
           create a <code>oidcConfig.dev.js</code> file in the
          <code> src</code> directory to connect to your OpenID
            authentication provider. The file should follow this format:
        </p>

        <FileCode />

        <p>
          Next enter the the uri to your graphql backend in the
          <code> src/index.js</code> file.
        </p>

        <BackendCode />

        <p>
          You are now ready to go.
        </p>
      </Col>
      <Col md={{ size: 5 }} className="sm-img-col">
        <img className="align-self-center sm-blob" src={config} alt="" />
      </Col>
    </Row>
  );
}

export default LocalizedComponent(ConfigSection);
