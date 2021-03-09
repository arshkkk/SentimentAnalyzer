import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Circle } from 'react-feather';
import { CircleWrapper, DataWrapper } from './Result.styles';
import { TableComponent } from './Table';
import { getClassificationAlgo } from '../../constant_data/classification_algos';
import { getEmbeddingAlgo } from '../../constant_data/feature_extraction_algo';
import { WordCloud } from '../WordCloud';

export const Result = (props) => (
  <div style={{ marginBottom: '140px', marginTop: '50px' }}>
    <Container>
      <Row className="justify-content-center text-black-50">
        <h1>Metrics</h1>
      </Row>
      <Row xs={1} md={2} className="justify-content-center text-black-50">
        <Col>
          <h5 className="text-center">
            <span className="text-secondary">Embedding Algorithm:</span>{' '}
            {getEmbeddingAlgo(props?.result?.embedding_algo)}
          </h5>
        </Col>
        <Col>
          <h5 className="text-center">
            <span className="text-secondary">Classification Algorithm:</span>
            {getClassificationAlgo(props?.result?.classifier)}
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#ffc107 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics?.precison.toFixed(5)}%
            </DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            Precision
          </h5>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#0dcaf0 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics?.accuracy.toFixed(5)}%
            </DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            Accuracy
          </h5>
        </Col>

        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#198754 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics['F1-Score'].toFixed(5)}%
            </DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            F1 Score
          </h5>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#dc3545 !important'}>
            {' '}
            <Circle />
            <DataWrapper>
              {props?.result?.metrics?.recall.toFixed(5)}%
            </DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            Recall
          </h5>
        </Col>
      </Row>
      <Row
        style={{ marginTop: '50px' }}
        className="justify-content-center text-black-50"
      >
        <h1>Insights</h1>
      </Row>
      <Row>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#0dcaf0 !important'}>
            {' '}
            <Circle />
            <DataWrapper>{props?.result?.insights?.total}</DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            Total
          </h5>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#ffc107 !important'}>
            {' '}
            <Circle />
            <DataWrapper>{props?.result?.insights?.total_neut}</DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            Satisfied Customers
          </h5>
        </Col>{' '}
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#dc3545 !important'}>
            {' '}
            <Circle />
            <DataWrapper>{props?.result?.insights?.total_neg}</DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            Disappointed Customers
          </h5>
        </Col>
        <Col className="d-flex flex-column align-items-center">
          <CircleWrapper fill={'#198754 !important'}>
            {' '}
            <Circle />
            <DataWrapper>{props?.result?.insights?.total_pos}</DataWrapper>
          </CircleWrapper>
          <h5 className="text-secondary" style={{ marginTop: '70px' }}>
            Happy Customers
          </h5>
        </Col>
      </Row>
      <Row xs={1} md={3} className="justify-content-center">
        <Col>
          <WordCloud
            heading="Happy Customers"
            list={props?.result?.insights?.top_pos}
          />
        </Col>
        <Col>
          <WordCloud
            heading="Satisfied Customers"
            list={props?.result?.insights?.top_neut}
          />
        </Col>
        <Col>
          <WordCloud
            heading="Disappointed Customers"
            list={props?.result?.insights?.top_neg}
          />
        </Col>
      </Row>

      <Row xs={1} md={3} className="justify-content-center">
        <Col>
          <TableComponent
            color={'bg-warning'}
            heading="Happy Customers"
            list={props?.result?.insights?.top_pos}
          />
        </Col>
        <Col>
          <TableComponent
            color={'bg-success'}
            heading="Satisfied Customers"
            list={props?.result?.insights?.top_neut}
          />
        </Col>
        <Col>
          <TableComponent
            color={'bg-danger'}
            heading="Disappointed Customers"
            list={props?.result?.insights?.top_neg}
          />
        </Col>
      </Row>
    </Container>
  </div>
);
