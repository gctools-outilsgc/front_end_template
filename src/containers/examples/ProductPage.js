import React from 'react';

import { Container, Row } from 'reactstrap';

import ProductJumbo from '../../components/examples/product/ProductJumbo';
import InfoText from '../../components/examples/product/InfoText';
import LeftImageBlock from
  '../../components/examples/product/LeftImageBlock';
import RightImageBlock from
  '../../components/examples/product/RightImageBlock';
import ProductFeatures from
  '../../components/examples/product/ProductFeatures';
import BlockCta from '../../components/examples/product/BlockCta';
import FinalCta from '../../components/examples/product/FinalCta';
import ProductStatistics from
  '../../components/examples/product/ProductStatistics';

const ProductPage = () => (
  <div>
    <ProductJumbo />
    <Container>
      <Row>
        <InfoText />
      </Row>
      <LeftImageBlock />
      <RightImageBlock />
      <Row>
        <InfoText
          heading="The Future of OADW"
          // eslint-disable-next-line max-len
          body="Croissant lemon drops icing bear claw pudding danish pudding bonbon macaroon. Ice cream marzipan bear claw fruitcake powder macaroon icing pie toffee. Cake chocolate cake macaroon sesame snaps cotton candy cake. Halvah cookie oat cake sesame snaps biscuit pudding croissant pie. Pastry cake bonbon jujubes cake danish. Bear claw dessert fruitcake bonbon chocolate cake oat cake."
        />
      </Row>
      <ProductFeatures
        heading="Students"
      />
      <ProductFeatures />
      <ProductStatistics />
    </Container>
    <BlockCta />
    <Container>
      <FinalCta />
    </Container>
  </div>
);

export default ProductPage;
