import React from 'react';
import { Row, Col } from 'reactstrap';

import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

import arch from '../../assets/imgs/arch.png';

function StructSection() {
  return (
    <Row className="flex mt-4">
      <Col
        md={{ size: 6, offset: 1 }}
        className="align-self-center order-md-12"
      >
        <h2>Project Structure</h2>
        <p>
          The front-end template project structure has been setup to
           provide better findability and organization for you and your
           components. In the <code>src</code> directory you have four
           main directories to work with, the <code>assets</code>,
          <code> components</code>, <code>containers</code> and
          <code> gql</code> directories.
        </p>
        <p>
          The <code>container</code> directory is for your top-level page
           containers of your application. These are what you would use
           with <code>React Router</code> to route to new pages in your
           application.
        </p>
        <p>
          The <code>components</code> directory is for the rest of your
           components that will make up the pages of your application. We
           suggest creating a <code>core</code> directory to house your
           components that will be used on multiple pages of your
           application. Other components can then be sorted into
           directories based of your page structure and then be broken
           down further into separate features.
        </p>
        <p>
          The <code>gql</code> directory is for your graphql
          <code> queries</code> and <code>mutations</code>.
           We recommend keeping these in separate files for better
           organization.
        </p>
        <p>
          You can find examples of most of the structure already in
           the front-end template when you first load the project.
        </p>
      </Col>
      <Col md="5" className="order-md-1 text-right sm-img-col">
        <img
          className="align-self-center float-right sm-blob"
          src={arch}
          alt=""
        />
      </Col>
    </Row>
  );
}

export default LocalizedComponent(StructSection);
