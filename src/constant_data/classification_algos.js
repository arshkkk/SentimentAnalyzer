export const classification_algos = [
  {
    value: 'lr',
    text: 'Logistic Regression',
  },
  {
    value: 'nb',
    text: 'Naive Bayes',
  },
  {
    value: 'rb',
    text: 'Rule based classification',
  },
  {
    value: 'svm',
    text: 'Support Vector Machine',
  },
  {
    value: 'dt',
    text: 'Decision Tree',
  },
  {
    value: 'nn',
    text: 'Neural Network(Perceptron)',
  },
];

export const getClassificationAlgo = (algo) => {
  switch (algo) {
    case 'lr':
      return 'Logistic Regression';
    case 'nb':
      return 'Naive Bayes';
    case 'rb':
      return 'Rule Based';
    case 'svm':
      return 'Support Vector Machine';
    case 'dt':
      return 'Decision Tree';
    case 'nn':
      return 'Neural Network(Perceptron)';
    default:
      return 'Logistic Regression';
  }
};
