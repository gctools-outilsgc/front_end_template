import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Button } from 'reactstrap';

const BlockCta = (props) => {
  const {
    heading,
    description,
    actionText,
    actionLink,
  } = props;

  return (
    <div className="bg-primary text-light p-5">
      <Container>
        <Row className="flex">
          <Col sm="8" className="align-self-center">
            <h2>{heading}</h2>
            <div>{description}</div>
          </Col>
          <Col sm="4" className="align-self-center">
            <Button
              href={actionLink}
              color="light"
              block
            >
              {actionText}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

BlockCta.defaultProps = {
  heading: 'Dear Developers',
  description: 'If you like our project, help us out on Github!',
  actionText: 'Help us out!',
  actionLink: '#',
};

BlockCta.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  actionLink: PropTypes.string,
  actionText: PropTypes.string,
};

export default BlockCta;
