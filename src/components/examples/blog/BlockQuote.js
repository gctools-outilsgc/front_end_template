import React from 'react';
import PropTypes from 'prop-types';

const BlockQuote = (props) => {
  const { text } = props;
  const style = {
    borderLeftWidth: '4px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#0ba7b4',
    paddingLeft: '8px',
    fontSize: '1.25em',
    lineHeight: '200%',
  };
  return (
    <div className="m-5">
      <p style={style}>{text}</p>
    </div>
  );
};

BlockQuote.defaultProps = {
  // eslint-disable-next-line max-len
  text: '"When I got home my dog would not stop chasing me around my house!"',
};

BlockQuote.propTypes = {
  text: PropTypes.string,
};

export default BlockQuote;
