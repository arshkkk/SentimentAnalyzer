import styled from 'styled-components';
import { Timeline } from 'antd';

export const HowWeDoItWrapper = styled('div')`
  padding: 20px;
  margin: 30px 0;

  .timeline {
    width: 100%;
    max-width: 45rem;
    margin: 5rem auto 0 auto;
  }

  .timeline__item {
    width: 42%;
    background-color: #fff;
    margin: 2rem 0;
    position: relative;
    box-shadow: 0 0.4rem 1rem -0.6rem rgba(0, 0, 0, 0.4);
  }

  .timeline__item:nth-child(even) {
    margin-left: auto;
  }

  .timeline__item:before {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: #00ba92;
    border-radius: 50%;
    top: 1rem;
    z-index: 2;
  }

  .timeline__item:not(:last-child):after {
    content: '';
    position: absolute;
    height: 110%;
    width: 2px;
    top: 2rem;
    background-color: #ccc;
    font-weight: 600;
  }

  .timeline__item:nth-child(odd):before {
    right: -19%;
    transform: translateX(50%);
  }

  .timeline__item:nth-child(even):before {
    left: -19%;
    transform: translateX(-50%);
  }

  .timeline__item:nth-child(odd):after {
    right: -19.5%;
  }

  .timeline__item:nth-child(even):after {
    left: -19.5%;
  }

  .timeline__date {
    background-color: rgb(0, 41, 186);
    padding: 0.5rem;
    margin: 0 -0.5rem;
    font-size: 1.6rem;
    line-height: 1.28;
    text-align: left;
    border-radius: 0 0.25rem 0.25rem 0;
    color: #fff;
  }

  .timeline__item:nth-child(odd) .timeline__date {
    border-radius: 0.25rem 0 0 0.25rem;
    text-align: right;
  }

  .timeline__date:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    top: 0;
  }

  .timeline__item:nth-child(odd) .timeline__date:after {
    border-width: 1.5rem 0 1.5rem 1.6rem;
    border-color: transparent transparent transparent rgba(0, 41, 186);
    right: -0.48rem;
    transform: translateX(100%);
  }

  .timeline__item:nth-child(even) .timeline__date:after {
    border-width: 1.5rem 1.6rem 1.5rem 0;
    border-color: transparent rgba(0, 41, 186) transparent transparent;
    left: -0.48rem;
    transform: translateX(-100%);
  }

  .timeline__content {
    padding: 1rem;
  }

  .timeline__title {
    color: #ff619b;
    font-size: 1.3rem;
    margin: 0 0 1rem;
  }
`;

export const TimeLineWrapper = styled(Timeline)`
  margin-top: 50px;
`;
export const TimeLineIconWrapper = styled('div')`
  > svg {
    height: auto;
    width: 35px;
  }
`;
