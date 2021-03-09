export const feature_extraction_algo = [
  { text: 'Word2Vec', value: 'w2vec' },
  { text: 'Bag of Words', value: 'ngrams' },
];

export const getEmbeddingAlgo = (algo) => {
  switch (algo) {
    case 'w2vec':
      return 'Word2Vec';
    default:
      return 'Bag of Words';
  }
};
