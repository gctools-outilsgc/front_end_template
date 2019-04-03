import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button } from 'reactstrap';

const UserBlock = (props) => {
  const {
    user,
    timeStamp,
    readTime,
  } = props;
  return (
    <Row>
      <Col className="align-self-center">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <img
                src={user.avatar}
                alt={user.name}
                className="avatar rounded-circle"
              />
            </div>
            <div className="ml-2">
              <div>
                {user.name}
              </div>
              <small className="text-muted">
                {user.title}
              </small>
            </div>
          </div>
          <div className="ml-3">
            <Button>
              Follow
            </Button>
          </div>
        </div>
      </Col>
      <Col>
        <div className="float-right">
          {timeStamp}
          <div className="text-muted">
            {readTime}
          </div>
        </div>
      </Col>
    </Row>
  );
};

UserBlock.defaultProps = {
  user: {
    // eslint-disable-next-line max-len
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/charliecwaite/128.jpg',
    name: 'Bill Tennisco',
    title: 'Thoughtful Bandit of Prototypes',
  },
  timeStamp: 'June 19 2019',
  readTime: '2 minute read',
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }),
  timeStamp: PropTypes.string,
  readTime: PropTypes.string,
};

export default UserBlock;
