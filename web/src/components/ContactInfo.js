import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { StaticQuery, graphql } from 'gatsby';

const ContactInfo = ({ data }) => {
  const { sanityCompanyInfo: companyInfo } = data;

  return (
    <Box my={2}>
      {companyInfo.address1 && <div>{companyInfo.address1}</div>}
      {companyInfo.address2 && <div>{companyInfo.address2}</div>}
      <div>
        {companyInfo.city ? `${companyInfo.city}, ` : null}
        {companyInfo.province ? `${companyInfo.province}, ` : null}
        {companyInfo.postalCode ? `${companyInfo.postalCode}` : null}
      </div>
      {companyInfo.phone && (
        <Link
          href={`tel:+${companyInfo.phone}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          style={{ display: 'block' }}
        >
          {companyInfo.phone}
        </Link>
      )}
      {companyInfo.email && <Link to={`mailto:${companyInfo.email}`}>{companyInfo.email}</Link>}
    </Box>
  );
};

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
