import React from 'react';
import PropTypes from 'prop-types';

const InfoText = (props) => {
  const { heading, body } = props;
  return (
    <div className="m-3 mb-5">
      <div className="text-center m-5">
        <h2>{heading}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <p className="w-75">{body}</p>
      </div>
    </div>
  );
};

InfoText.defaultProps = {
  heading: 'What is the OADW?',
  // eslint-disable-next-line max-len
  body: 'Caramels pie gummies pie tart sweet. Candy halvah toffee cake liquorice. Chocolate cake gummi bears jujubes donut marzipan soufflé liquorice chocolate cake gingerbread. Bear claw cheesecake ice cream icing. Sesame snaps toffee pie chocolate bar tart macaroon topping donut. Cotton candy jelly-o muffin.',
};

InfoText.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
};

export default InfoText;
