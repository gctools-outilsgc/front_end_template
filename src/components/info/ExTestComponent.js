import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Button } from 'reactstrap';

import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

export const ExTestComponent = (props) => {
  const { name, buttonText, buttonAction } = props;
  return (
    <Card>
      <CardBody>
        <div className="h5">
          {__('Your Name is:')}
        </div>
        <div className="h6">
          {name}
        </div>
        <div>
          {__('Just doing a test')}
        </div>
        <div>
          <Button
            onClick={buttonAction}
          >
            {buttonText}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

ExTestComponent.defaultProps = {
  name: 'Jonald',
  buttonText: 'Action',
  buttonAction: () => {},
};

ExTestComponent.propTypes = {
  name: PropTypes.string,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func,
};

export default LocalizedComponent(ExTestComponent);
