import React from 'react';
import {
  CardItemHeading,
  CardItemLogoWrapper,
  CardItemSubData,
  CardItemWrapper,
} from './CardItem.styles';

export const CardItem = ({ logo, heading, subheading, link }) => (
  <CardItemWrapper>
    <CardItemLogoWrapper className="text-primary">{logo}</CardItemLogoWrapper>
    <CardItemHeading>{heading}</CardItemHeading>
    <CardItemSubData>
      {subheading.slice(0, 150)}
      {subheading.length > 150 ? '...' : ''}
    </CardItemSubData>
    <a target="_blank" href={link}>
      Reference
    </a>
  </CardItemWrapper>
);
