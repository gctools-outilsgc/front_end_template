import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';

const ProductFeatures = (props) => {
  const { heading, features } = props;

  const featureList = features.map(f => (
    <Col sm="4" key={f.featureHeading}>
      <div>
        <img
          src={f.img}
          alt={f.imgAlt}
          className="img-fluid mb-3"
        />
        <div className="h5">{f.featureHeading}</div>
        <small className="text-muted">{f.description}</small>
        <div>
          <a href={f.linkHref}>
            {f.linkText}
          </a>
        </div>
      </div>
    </Col>
  ));

  return (
    <div className="mt-5 mb-5">
      <h2 className="text-center m-5">{heading}</h2>
      <Row>
        {featureList}
      </Row>
    </div>
  );
};

ProductFeatures.defaultProps = {
  heading: 'Public Servants',
  features: [
    {
      // eslint-disable-next-line max-len
      img: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imgAlt: 'this is an exmaple',
      featureHeading: 'GCcollab',
      // eslint-disable-next-line max-len
      description: 'Chocolate bar sugar plum jujubes cookie gingerbread cupcake cupcake.',
      linkHref: '#',
      linkText: 'Learn More',
    },
    {
      // eslint-disable-next-line max-len
      img: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imgAlt: 'this is an example',
      featureHeading: 'GCMessage',
      // eslint-disable-next-line max-len
      description: 'Cookie fruitcake jujubes halvah muffin.',
      linkHref: '#',
      linkText: 'Learn More',
    },
    {
      // eslint-disable-next-line max-len
      img: 'https://images.pexels.com/photos/834949/pexels-photo-834949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imgAlt: 'this is an example',
      featureHeading: 'GCcareer',
      // eslint-disable-next-line max-len
      description: 'Cake pie liquorice ice cream candy donut.',
      linkHref: '#',
      linkText: 'Learn More',
    },
  ],
};

ProductFeatures.propTypes = {
  heading: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    linkHref: PropTypes.string,
    linkText: PropTypes.string,
  })),
};

export default ProductFeatures;
