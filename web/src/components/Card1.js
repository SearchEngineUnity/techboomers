import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  color: #5a5a5a !important;
  padding: 7.5px 30px;
  background-color: #fcce09;
  border: solid 2px #fcce09;
  border-radius: 4px;
  transition: transform 0.5s ease;
  &:hover,
  &:focus {
    background-color: #fde05d;
    border: solid 2px #fde05d;
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px #00000029;
  }
  &.active,
  &:active {
    color: #5a5a5a !important;
    background-color: white !important;
    border: solid 2px #fcce09 !important;
    box-shadow: 0px 3px 6px #00000029 !important;
  }
`;

const StyledCard = styled(Card)`
  box-shadow: 0px 3px 6px #00000029;
  }
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: white;
  flex: 1 1 auto;
  font-family: Montserrat;
  }
`;

const StyledCardBody = styled(Card.Body)`
  background-color: #2664B0;
  flex: none;
  border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
  }
`;

const AppName = styled.span`
  color: #5a5a5a;
  font-weight: 700;
  font-size: 30px;
`;

const OsName = styled.span`
  color: #2664b0;
  font-weight: 700;
  font-size: 30px;
`;

const Subtitle = styled(Card.Title)`
  color: #fff;
  font-size: 14px;
  padding-top: 12px;
  padding-bottom: 20px;
`;

function Card1({ idTag, pdfURL, appName, appIcon, osName, osIcon, osDevice }) {
  return (
    <StyledCard className="border-0 h-100" id={idTag}>
      <StyledCardHeader>
        <AppName>{appName} for</AppName> <br />
        <OsName>
          {osName} &#40;{osDevice}&#41;
        </OsName>
      </StyledCardHeader>
      <StyledCardBody>
        <Row>
          <Col className="col-auto">
            <img
              src={appIcon}
              alt={appName}
              height="40px"
              width="40px"
              loading="lazy"
              className="mx-auto"
              style={{ display: 'block' }}
            />
            <Subtitle className="text-center">{appName}</Subtitle>
          </Col>
          <Col className="col-auto">
            <img
              src={osIcon}
              alt={osName}
              height="40px"
              width="40px"
              loading="lazy"
              className="mx-auto"
              style={{ display: 'block' }}
            />
            <Subtitle className="text-center">{osName}</Subtitle>
          </Col>
        </Row>
        <StyledButton href={pdfURL} target="_blank" rel="noopener noreferrer">
          Open Guide
        </StyledButton>
      </StyledCardBody>
    </StyledCard>
  );
}
export default Card1;
