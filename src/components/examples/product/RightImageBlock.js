import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button } from 'reactstrap';

const RightImageBlock = (props) => {
  const {
    heading,
    body,
    img,
    imgAlt,
  } = props;
  return (
    <Row className="flex mt-4">
      <Col className="align-self-center">
        <div>
          <div>
            <h2>{heading}</h2>
          </div>
          <div className="mt-3 mb-3">
            <p>{body}</p>
          </div>
          <div>
            <Button color="primary">
              Call To Action
            </Button>
          </div>
        </div>
      </Col>
      <Col className="align-self-center">
        <img
        // eslint-disable-next-line max-len
          src={img}
          alt={imgAlt}
          className="img-fluid"
        />
      </Col>
    </Row>
  );
};

RightImageBlock.defaultProps = {
  heading: 'Our Mission',
  // eslint-disable-next-line max-len
  body: 'Cheesecake dragée tart croissant sweet candy canes tootsie roll jelly. Jelly beans candy candy canes gummies dragée cake gingerbread caramels jelly-o. Sesame snaps croissant candy sweet. Jelly beans halvah cotton candy cheesecake apple pie brownie oat cake. Chupa chups danish toffee bear claw donut candy.',
  // eslint-disable-next-line max-len
  img: 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  imgAlt: 'A trendy office desk',
};

RightImageBlock.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default RightImageBlock;
