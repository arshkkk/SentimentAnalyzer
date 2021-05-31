import { Steps, Button, message } from 'antd';
import React, { useState } from 'react';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import { FetchData } from './FetchData';
import { StepsWrapper } from './StepsComponent.styles';
import { feature_extraction_algo } from '../../constant_data/feature_extraction_algo';
import { classification_algos } from '../../constant_data/classification_algos';
import { BACKEND_URL } from '../../config';
const { Step } = Steps;

const SelectComponent = ({ list, heading, value, setValue }) => (
  <Row>
    <Col xs={12} md={{ size: 8, offset: 2 }}>
      <Label for="story" style={{ fontSize: '24px' }}>
        {heading}
      </Label>
      <Input
        type="select"
        name="story"
        id="story"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {list.map(({ text, value }, index) => (
          <option key={index} value={value}>
            {text}
          </option>
        ))}
      </Input>
    </Col>
  </Row>
);

export const StepsComponent = ({ setResult }) => {
  const [current, setCurrent] = React.useState(0);
  const [feature, setFeature] = React.useState('ngrams');
  const [classifier, setClassifier] = React.useState('nb');
  const [loading, setLoading] = useState(false);

  const stepsComponent = [
    {
      title: 'Fetch Data',
      content: <FetchData />,
    },
    {
      title: 'Feature Extraction',
      content: (
        <SelectComponent
          list={feature_extraction_algo}
          heading={'Select Feature Extraction Algorithm'}
          value={feature}
          setValue={setFeature}
        />
      ),
    },
    {
      title: 'Classification',
      content: (
        <SelectComponent
          list={classification_algos}
          heading={'Select Classification Algorithm'}
          value={classifier}
          setValue={setClassifier}
        />
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const postDataToServer = () => {
    setLoading(true);
    fetch(`${BACKEND_URL}/classify`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ classifier, feature }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
        setLoading(false);
        window.scrollTo(0, 400);
      })
      .catch((e) => {
        message.error(e.message);
        setResult({
          classifier: 'nb',
          embedding_algo: 'ngrams',
          insights: {
            top_neg: [
              ["'use'", 28],
              ["'last'", 21],
              ["'buy'", 20],
              ["'amazon'", 20],
              ["'device'", 17],
              ["'week'", 16],
              ["'junk'", 16],
              ["'kindle'", 15],
              ["'get'", 15],
              ["'one'", 15],
              ["'year'", 14],
              ["'model'", 13],
              ["'try'", 13],
              ["'go'", 13],
              ["'make'", 12],
              ["'would'", 10],
              ["'purchase'", 10],
              ["'show'", 10],
              ["'phone'", 9],
              ["'back'", 9],
              ["'time'", 8],
              ["'customer'", 8],
              ["'tablet'", 8],
              ["'useless'", 8],
              ["'best'", 8],
              ["'charge'", 8],
              ["'turn'", 8],
              ["'apps'", 8],
              ["'service'", 7],
              ["'cell'", 7],
              ["'new'", 7],
              ["'speaker'", 7],
              ["'replace'", 7],
              ["'return'", 6],
              ["'support'", 6],
              ["'code'", 6],
              ["'hour'", 6],
              ["'less'", 6],
              ["'could'", 6],
              ["'fire'", 6],
              ["'read'", 6],
              ["'old'", 6],
              ["'offer'", 6],
              ["'constantly'", 6],
              ["'product'", 6],
              ["'register'", 6],
              ["'great'", 5],
              ["'experience'", 5],
              ["'say'", 5],
            ],
            top_neut: [
              ["'device'", 49],
              ["'tablet'", 46],
              ["'amazon'", 46],
              ["'use'", 34],
              ["'app'", 33],
              ["'screen'", 32],
              ["'apps'", 31],
              ["'magazine'", 28],
              ["'store'", 25],
              ["'take'", 24],
              ["'good'", 22],
              ["'im'", 19],
              ["'one'", 19],
              ["'ok'", 18],
              ["'fine'", 18],
              ["'change'", 17],
              ["'price'", 16],
              ["'view'", 16],
              ["'menu'", 16],
              ["'come'", 16],
              ["'button'", 16],
              ["'book'", 14],
              ["'kid'", 14],
              ["'google'", 14],
              ["'home'", 14],
              ["'photo'", 14],
              ["'also'", 13],
              ["'like'", 13],
              ["'make'", 13],
              ["'little'", 13],
              ["'time'", 12],
              ["'download'", 12],
              ["'dont'", 12],
              ["'back'", 12],
              ["'doesnt'", 12],
              ["'buy'", 11],
              ["'say'", 11],
              ["'connect'", 11],
              ["'want'", 11],
              ["'slow'", 11],
              ["'great'", 10],
              ["'go'", 10],
              ["'still'", 10],
              ["'new'", 10],
              ["'android'", 10],
              ["'could'", 9],
              ["'need'", 9],
              ["'show'", 9],
              ["'get'", 9],
            ],
            top_pos: [
              ["'love'", 1698],
              ["'great'", 1585],
              ["'use'", 1426],
              ["'tablet'", 1386],
              ["'buy'", 953],
              ["'easy'", 884],
              ["'get'", 796],
              ["'one'", 754],
              ["'kindle'", 740],
              ["'good'", 736],
              ["'echo'", 712],
              ["'amazon'", 652],
              ["'work'", 615],
              ["'like'", 605],
              ["'well'", 563],
              ["'product'", 542],
              ["'read'", 532],
              ["'purchase'", 518],
              ["'kid'", 513],
              ["'alexa'", 495],
              ["'old'", 489],
              ["'play'", 481],
              ["'price'", 473],
              ["'screen'", 465],
              ["'would'", 458],
              ["'fire'", 437],
              ["'book'", 435],
              ["'show'", 408],
              ["'device'", 397],
              ["'year'", 395],
              ["'time'", 393],
              ["'light'", 390],
              ["'music'", 389],
              ["'game'", 389],
              ["'much'", 359],
              ["'need'", 349],
              ["'gift'", 338],
              ["'apps'", 338],
              ["'really'", 336],
              ["'want'", 332],
              ["'also'", 325],
              ["'set'", 324],
              ["'sound'", 320],
              ["'make'", 310],
              ["'best'", 310],
              ["'thing'", 297],
              ["'video'", 268],
              ["'new'", 267],
              ["'go'", 265],
              ["'recommend'", 263],
            ],
            total: 5000,
            total_neg: 34,
            total_neut: 54,
            total_pos: 4912,
          },
          metrics: {
            'F1-Score': 93.56969117847238,
            accuracy: 94.94,
            precison: 94.42672409571864,
            recall: 94.94,
          },
        });
        setLoading(false);
      });
  };

  return (
    <StepsWrapper>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={{ size: 8, offset: 2 }}>
            <Steps current={current}>
              {stepsComponent.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">
              {stepsComponent[current].content}
            </div>
            <div className="steps-action">
              {current < stepsComponent.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === stepsComponent.length - 1 && (
                <Button
                  disabled={loading}
                  type="primary"
                  onClick={() => postDataToServer()}
                >
                  {loading ? 'Request in Process' : 'Done'}
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StepsWrapper>
  );
};
