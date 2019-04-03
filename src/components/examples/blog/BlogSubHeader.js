import React from 'react';
import PropTypes from 'prop-types';

const BlogSubHeader = (props) => {
  const { subHeader } = props;
  return (
    <div className="mt-4 mb-4">
      <h2 className="h3">{subHeader}</h2>
    </div>
  );
};

BlogSubHeader.defaultProps = {
  // eslint-disable-next-line max-len
  subHeader: 'How to go on Living as a Squirrel',
};

BlogSubHeader.propTypes = {
  subHeader: PropTypes.string,
};

export default BlogSubHeader;
