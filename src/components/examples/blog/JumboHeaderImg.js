import React from 'react';
import PropTypes from 'prop-types';

const JumboHeaderImg = (props) => {
  const { img, imgAlt } = props;
  const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '450px',
  };
  return (
    <div style={style}>
      <span className="sr-only">{imgAlt}</span>
    </div>
  );
};

JumboHeaderImg.defaultProps = {
  // eslint-disable-next-line max-len
  img: 'https://images.pexels.com/photos/1571117/pexels-photo-1571117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  imgAlt: 'A majectic squirrel peeping around a tree',
};

JumboHeaderImg.propTypes = {
  img: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default JumboHeaderImg;
