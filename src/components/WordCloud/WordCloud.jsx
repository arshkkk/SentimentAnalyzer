import React from 'react';
import ReactWordcloud from 'react-wordcloud';

export const WordCloud = ({ list, heading }) => {
  const words = list.map((l) => {
    let [text, value] = l;
    text = text.slice(1, text.length - 1);
    return { text, value };
  });
  const options = {
    rotations: 2,
    rotationAngles: [0, 0],
  };
  const size = [400, 400];

  return (
    <div style={{ marginTop: '70px' }}>
      <h3 style={{ marginBottom: '-60px' }}>{heading}</h3>

      <ReactWordcloud size={size} options={options} words={words} />
    </div>
  );
};
