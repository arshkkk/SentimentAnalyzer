import React from 'react';
import { Jumbotron, Button, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MainButton } from '../../pages/Homepage/Homepage.styles';

export const HeroSection = (props) => {
  return (
    <div
      style={{
        background: '#f5f5f5',
        padding: '60px 0',
      }}
    >
      <Container fluid={true}>
        <Row>
          <Col xs={12} md={7}>
            {' '}
            <Jumbotron
              style={{
                background: '#f5f5f5',
              }}
            >
              <h1
                className="text-md-center display-4 font-weight-bold"
                style={{ color: '#0029ba', marginBottom: '0' }}
              >
                Welcome to Sentiment Analyzer
              </h1>
              <p
                className="text-md-center text-secondary font-italic "
                style={{ fontSize: '20px' }}
              >
                Find Out What Customers are thinking about you
              </p>

              <p className="lead text-md-center">
                <Link to="/process">
                  <MainButton color="primary" size="lg">
                    Start Now
                  </MainButton>
                </Link>
              </p>
            </Jumbotron>
          </Col>
          <Col xs={0} md={5}>
            <img
              alt="feature.svg"
              src="feature.svg"
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
