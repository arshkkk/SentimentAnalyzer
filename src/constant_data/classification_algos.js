export const classification_algos = [
  { text: 'Naive Bayes', value: 'nb' },
  { text: 'Rule Based', value: 'rb' },
  { text: 'Logistic Regression', value: 'lr' },
];

export const getClassificationAlgo = (algo) => {
  switch (algo) {
    case 'nb':
      return 'Naive Bayes';
    case 'rb':
      return 'Rule Based';
    default:
      return 'Logistic Regression';
  }
};
