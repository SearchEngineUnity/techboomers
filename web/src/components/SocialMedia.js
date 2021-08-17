import React from 'react';
import { IconButton } from 'gatsby-theme-material-ui';
import { StaticQuery, graphql } from 'gatsby';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

const ContactInfo = ({ data }) => {
  const { allSanitySocialInfo: socials } = data;

  return (
    <>
      {socials.edges.map((social) => {
        const iconSelector = (key) => {
          switch (key) {
            case 'facebook':
              return <FacebookIcon />;
            case 'twitter':
              return <TwitterIcon />;
            case 'instagram':
              return <InstagramIcon />;
            case 'pinterest':
              return <PinterestIcon />;
            case 'linkedin':
              return <LinkedInIcon />;
            case 'youtube':
              return <YouTubeIcon />;

            default:
              return <div>under construction</div>;
          }
        };
        return (
          <IconButton
            color="inherit"
            to={social.node.link}
            target="_blank"
            key={social.node.social}
          >
            {iconSelector(social.node.social)}
          </IconButton>
        );
      })}
    </>
  );
};
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
