import React from 'react';
import { Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';

const ContactInfo = ({ data }) => <Typography>this is an address</Typography>;
export default function Contact(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          allSanitySocialInfo {
            edges {
              node {
                _id
                social
                link
              }
            }
          }
        }
      `}
      render={(data) => <ContactInfo data={data} {...props} />}
    />
  );
}
