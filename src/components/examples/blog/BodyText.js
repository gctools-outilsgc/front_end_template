import React from 'react';
import PropTypes from 'prop-types';

const BodyText = (props) => {
  const { text } = props;
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

BodyText.defaultProps = {
  // eslint-disable-next-line max-len
  text: 'Tiramisu candy canes chupa chups. Cotton candy bonbon tart apple pie. Croissant chocolate bar candy canes powder. Cookie croissant candy canes biscuit tart. Cake carrot cake marzipan. Cupcake chocolate cake croissant pastry croissant. Wafer wafer jujubes. Marshmallow gummies sesame snaps lemon drops chocolate marzipan cheesecake cookie gummi bears.',
};

BodyText.propTypes = {
  text: PropTypes.string,
};

export default BodyText;
