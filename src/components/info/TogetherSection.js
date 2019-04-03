import React from 'react';
import { Row, Col } from 'reactstrap';

import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

import comp from '../../assets/imgs/comp.png';

const links = {
  micro: 'https://github.com/gctools-outilsgc/micro_service_template',
};

function TogetherSection() {
  return (
    <Row className="flex mt-4">
      <Col md="7" className="align-self-center">
        <h2>Bringing it all together</h2>
        <p>
          The front-end template has been configured to easily work with
           our <a href={links.micro}>Micro Service Template</a>. Using
           both in combination you can quickly build great applications
           that utilize <code>GraphQL</code>, <code> Prisma</code> and
          <code> React</code>.
        </p>
      </Col>
      <Col className="sm-img-col" md={{ size: 5 }}>
        <img className="align-self-center sm-blob" src={comp} alt="" />
      </Col>
    </Row>
  );
}

export default LocalizedComponent(TogetherSection);
