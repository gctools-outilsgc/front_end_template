import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';

const ProductStatistics = (props) => {
  const { stats } = props;

  const statsList = stats.map(s => (
    <Col>
      <div className="d-flex justify-content-center">
        <div className="display-4">
          {s.number}
        </div>
      </div>
      <div className="text-center font-weight-bold text-primary">
        {s.title}
      </div>
    </Col>
  ));

  return (
    <Row className="m-3 mb-5">
      {statsList}
    </Row>
  );
};

ProductStatistics.defaultProps = {
  stats: [
    {
      number: '1000',
      title: 'Unique Groups',
    },
    {
      number: '20000',
      title: 'Discussions',
    },
    {
      number: '60',
      title: 'Open Jobs',
    },
    {
      number: '2',
      title: 'Coffees Per Day',
    },
  ],
};

ProductStatistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string,
    title: PropTypes.string,
  })),
};

export default ProductStatistics;
