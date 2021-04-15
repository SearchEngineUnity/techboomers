import React from 'react';
import { Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';

const ContactInfo = ({ data }) => <Typography>this is an address</Typography>;
export default function Contact(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityCompanyInfo {
            address1
            address2
            city
            country
            email
            phone
            postalCode
            province
          }
        }
      `}
      render={(data) => <ContactInfo data={data} {...props} />}
    />
  );
}
