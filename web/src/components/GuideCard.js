import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function GuideCard({ title, date, image, imageFilename, imageAlt, url }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '32px' }}>
      <Link to={url}>
        <Card className="h-100">
          <Img fluid={image} alt={imageAlt} title={imageFilename} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{date.slice(0, 10).replace(/-/g, '/')}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

GuideCard.defaultProps = {
  image: {
    aspectRatio: 1.5,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACaElEQVQoz9XQe0vTcRTH8e+mkJe2vMxhmubM1IipqOSNDGTJMC0tHXmZQZtz6bylJqESqag53EyZ17SokCmWWWomm5VZz8AehY/Bd7+ZUD2EDhwOnD9e58MRdXV12Gw2nM4x1jdW+PK5lS1vLL2efDTeWYTXLnUKya4L9OcMsOU/z464iltEUSHqUQUsk5o2QU11ExZLHeI/AC0WbE02HD5w/W/wCvHHoOwYHMj9Ay7JojFIYMQ/oAVRbzbR3NjAmARubq7w9Qg8Q4/nMnGeGQkcQXi0JLqS6M+WQLkP1EkJT/9OeMIHjmOsaaS+3oSoaW7D1N5Jv2Mc95tFtj61SWAyfTt6tDvzKHacKL3ZpE9nMFQwzNapBbzBxSydTKA6yEZM2DJpGdOUG7qoudOGKHFPcOPVU6pHndh6njBsb+HlYhn2t1YqV+fQr7m49sGM6bmZ6ZZpPt5y47n5kLVyE4MGJ8byDcr0y1zPnaQkaxzR+rODhh/3Ke61kp5lpCD/Nlarke6+drpHR3jkcvJ4aog+Zx+OQQfPhmZ47ZhkyTWDe2GZF1PvsRtn6IztpkXZgeia0NI8qKWwOJXokBQilRfRF5Zgt9tZcrt5t7rK3OwcZpOZoqIiSstKqayq4q7JRIP0+1brPTp0pTyIzqQrVIvIy4njUmYsmhg1Af5BBAcoMVQY2P22y8HBwVFvb2+j1+tRKpQoFArCQkOJUKmIiFATqVaTFB1FluYsefFxiITzSWg05wgPVyGTywgMCqS2tpb9/X18dXh4yN73PXQ6HXK5HCEEMpkMPz+/o+nbhUgH4uLjSUhM4hdsvOFb7lByegAAAABJRU5ErkJggg==',
    sizes: '(max-width: 220px) 100vw, 220px',
    src:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png',
    srcSet:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?w=110&h=62&fit=crop 110w, https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png 220w',
    srcSetWebp:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?w=110&h=62&fit=crop&fm=webp 110w, https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?fm=webp 220w',
    srcWebp:
      'https://cdn.sanity.io/images/irxu5yey/epoxypro/ba93a9e77b70952257bc194613928b6374960f11-220x124.png?fm=webp',
  },
  imageAlt: 'image alt',
  imageFilename: 'image',
};

GuideCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
  }),
  imageAlt: PropTypes.string,
  imageFilename: PropTypes.string,
};

export default GuideCard;
