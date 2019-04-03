/*
* Place your mutations here. We have provided an example mutation.
*/
import gql from 'graphql-tag';

export const EDIT = gql`
mutation editProfile($gcID: ID!, $data: ModifyProfileInput!) {
  modifyProfile(gcID: $gcID, data: $data) {
    gcID
    name
    email
    avatar
    mobilePhone
    officePhone
    team {
      id
    }
    address {
      id
      streetAddress
      city
      province
      postalCode
      country
    }
    titleEn
    titleFr
  }
}
`;

export default EDIT;
