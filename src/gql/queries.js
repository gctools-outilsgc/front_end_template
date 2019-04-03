/*
* Place your queries here. We have provided an example query.
*/
import gql from 'graphql-tag';

export const GET = gql`
query getProfile($gcID: ID!) {
  profiles(gcID: $gcID) {
    gcID
    name
    email
    avatar
    mobilePhone
    officePhone
    team {
      id
      organization {
        id
        nameEn
        nameFr
      }
      owner {
        gcID
        name
        avatar
        titleEn
        titleFr
      }
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
}`;

export default GET;
