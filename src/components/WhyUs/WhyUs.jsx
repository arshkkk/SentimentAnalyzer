import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { TeamHeading } from '../Team/Team.styles';
import {
  BarChart,
  Database,
  Download,
  FastForward,
  Shuffle,
} from 'react-feather';
import { ItemHeading, ItemSubData } from '../HowWeDoIt/Item/Item.styles';
import { WhyUsIconWrapper, WhyUsItemWrapper } from './WhyUs.styles';
const whyUsData = [
  {
    icon: <Shuffle />,
    heading: 'Flexibility',
    subheading: 'Upload your csv or fetch from twitter',
  },
  {
    icon: <Database />,
    heading: 'Independence',
    subheading: 'Choose your own algorithms',
  },
  {
    icon: <FastForward />,
    heading: 'Speed',
    subheading: 'Optimized, pre-trained models',
  },
  {
    icon: <BarChart />,
    heading: 'Insights',
    subheading: 'Charts and easy visualizations',
  },
];
export const WhyUs = () => (
  <Container
    style={{ marginBottom: '50px', marginTop: '50px' }}
    className="section"
  >
    <Row>
      <TeamHeading className="text-center mb-5">Why Us ?</TeamHeading>
    </Row>
    <Row className="">
      <Col xs={12} md={6}>
        <Row xs={1} md={2}>
          {whyUsData.map((d, index) => (
            <WhyUsItemWrapper
              className={`d-flex flex-column align-items-center${
                index < 2 ? ' mb-5' : ''
              }`}
            >
              <WhyUsIconWrapper className="text-primary">
                {d.icon}
              </WhyUsIconWrapper>
              <ItemHeading>{d.heading}</ItemHeading>
              <ItemSubData className="text-secondary font-italic">
                {d.subheading}
              </ItemSubData>
            </WhyUsItemWrapper>
          ))}
        </Row>
      </Col>
      <Col
        xs={12}
        md={6}
        className="text-center mt-xs-5 mt-md-0 d-md-block d-none"
      >
        <img
          alt="sentiment.svg"
          src="/sentiment.svg"
          style={{ height: 'auto', width: '50%' }}
        />
      </Col>
    </Row>
  </Container>
);
