export const feature_extraction_algo = [
  { text: 'Word2Vec vectorization', value: 'w2vec' },
  { text: 'CountVectorizer with Tf-Idf', value: 'ngrams' },
];

export const getEmbeddingAlgo = (algo) => {
  switch (algo) {
    case 'w2vec':
      return 'Word2Vec';
    default:
      return 'Bag of Words';
  }
};
