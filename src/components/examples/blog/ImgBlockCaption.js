import React from 'react';
import PropTypes from 'prop-types';

const ImgBlockCaption = (props) => {
  const { img, imgAlt, caption } = props;
  return (
    <div>
      <figure>
        <img
          src={img}
          alt={imgAlt}
          className="figure-img img-fluid rounded"
        />
        <figcaption className="figure-caption">{caption}</figcaption>
      </figure>
    </div>
  );
};

ImgBlockCaption.defaultProps = {
  // eslint-disable-next-line max-len
  img: 'https://images.pexels.com/photos/417328/pexels-photo-417328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  imgAlt: 'A squirrel that is biting the hand that feeds',
  caption: 'Do not bite the hands that feed you.',
};

ImgBlockCaption.propTypes = {
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  caption: PropTypes.string,
};

export default ImgBlockCaption;
