import React from 'react';
import { CardGroup } from 'react-bootstrap';
import styled from 'styled-components';
import SampleCard from './SampleCard';

// function SampleCardSegment(title, footer, props, id) {
//   return (
//     <>
//       {title && <h2>{title}</h2>}

//       <CardGroup>
//         <SampleCard SampleCard={props} key={id} />
//       </CardGroup>

//       {footer && <p>{footer}</p>}
//     </>
//   );
// }

// export default SampleCardSegment;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Footer = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function SampleCardSegment() {
  return (
    <Wrapper>
      <Title>This is a title</Title>

      <CardGroup>
        <SampleCard />
      </CardGroup>

      <Footer>This is a footer</Footer>
    </Wrapper>
  );
}

export default SampleCardSegment;
