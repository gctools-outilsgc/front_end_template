import React from 'react';
import PropTypes from 'prop-types';

const BlogHeader = (props) => {
  const { header, subHeader } = props;
  return (
    <div className="mt-4 mb-4">
      <h1>{header}</h1>
      <div className="text-muted h5">{subHeader}</div>
    </div>
  );
};

BlogHeader.defaultProps = {
  // eslint-disable-next-line max-len
  header: '12 Signs You May Actually be a Squirrel in a Forest and Not Even Know it!',
  subHeader: 'That would be nuts.',
};

BlogHeader.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
};

export default BlogHeader;
