import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

// assets
import blob from '../assets/imgs/static-blob.png';

class Home extends Component {
  componentDidMount() {
    document.title = 'Front-end Template';
  }

  render() {
    // To get past 79 line length limit
    const links = {
      micro: 'https://github.com/gctools-outilsgc/micro_service_template',
      front: 'https://github.com/gctools-outilsgc/front_end_template',
      account: 'https://github.com/gctools-outilsgc/concierge',
    };
    return (
      <Container>
        <Row className="flex">
          <h1 className="sr-only">Front End Template</h1>
          <Col className="align-self-center" xs="12" sm="7" md="5">
            <h2 className="display-4">Start building your front-end</h2>
            <p>
              Quickly prototype your applications by connecting to your
              account provider and back-end service. Also features easy
              internationalization.
            </p>
            <Link
              to="/info"
              href="/info"
            >
              Get started using the front-end template
            </Link>

            <h3 className="h4 mt-5">More information to get the job done</h3>
            <ul>
              <li>
                <a href="https://design.gccollab.ca">
                  Aurora Design System
                </a>
              </li>
              <li>
                <a href={links.micro} >
                  Micro service template
                </a>
              </li>
              <li>
                <a href={links.account} >
                  Concierge
                </a>
              </li>
              <li>
                <a href={links.front} >
                  Front-end template
                </a>
              </li>
            </ul>

            <h3 className="h4 mt-3">Example layouts</h3>
            <ul>
              <li>
                <Link
                  to="/product"
                  href="/product"
                >
                  Product page
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  href="/blog"
                >
                  Blog page
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="img-col" xs="12" sm="5" md={{ size: 6, offset: 1 }}>
            <img src={blob} alt="" className="display-img" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
