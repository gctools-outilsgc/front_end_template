import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'reactstrap';

const FinalCta = (props) => {
  const {
    heading,
    body,
    actionText,
    actionLink,
  } = props;

  return (
    <div className="text-center m-3 mb-5">
      <div className="m-5">
        <h2>{heading}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <p className="w-75">{body}</p>
      </div>
      <div>
        <Button
          color="primary"
          href={actionLink}
        >
          {actionText}
        </Button>
      </div>
    </div>
  );
};

FinalCta.defaultProps = {
  heading: 'Learn More About Our Apps',
  // eslint-disable-next-line max-len
  body: 'Cupcake sweet gummi bears danish cheesecake. Bear claw fruitcake toffee marshmallow chocolate bar pastry lemon drops. ',
  actionText: 'Take a Tour of the Suite',
  actionLink: '#',
};

FinalCta.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  actionLink: PropTypes.string,
  actionText: PropTypes.string,
};

export default FinalCta;
