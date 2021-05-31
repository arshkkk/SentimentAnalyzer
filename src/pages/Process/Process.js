import React, { useState } from 'react';
import { withLayout } from '../../hoc/withLayout';
import { StepsComponent } from '../../components/StepsComponent/StepsComponent';
import {
  Clock,
  MapPin,
  Activity,
  Cpu,
  Database,
  Layers,
  BarChart2,
} from 'react-feather';
import { CardWidget } from '../../components/CardWidget';
import { Result } from '../../components/Result';
const cardData = [
  {
    logo: <MapPin />,
    heading: 'Bag of words',
    subheading:
      'The bag-of-words model is a simplifying representation used in natural language processing and information retrieval. In this model, a text is represented as the bag of its words, disregarding grammar and even word order but keeping multiplicity.',
    link: 'https://en.wikipedia.org/wiki/Bag-of-words_model',
  },
  {
    logo: <Clock />,
    heading: 'Word2Vec',
    subheading:
      'Word2vec is a technique for natural language processing. The word2vec algorithm uses a neural network model to learn word associations from a large corpus of text. Once trained, such a model can detect synonymous words or suggest additional words for a partial sentence.',
    link: 'https://en.wikipedia.org/wiki/Word2vec',
  },
];
const cardData2 = [
  {
    logo: <Database />,
    heading: 'Logistic Regression',
    subheading:
      'In statistics, the logistic model is used to model the probability of a certain class or event existing such as pass/fail, win/lose, alive/dead or healthy/sick. ',
    link: 'https://en.wikipedia.org/wiki/Logistic_regression',
  },
  {
    logo: <Cpu />,
    heading: 'Naive Bayes',
    subheading:
      'In statistics, naive Bayes classifiers are a family of simple "probabilistic classifiers" based on applying Bayes\' theorem with strong independence assumptions between the features. They are among the simplest Bayesian network models, but coupled with kernel density estimation, they can achieve higher accuracy levels. ',
    link: 'https://en.wikipedia.org/wiki/Naive_Bayes_classifier',
  },
  {
    logo: <Cpu />,
    heading: 'Rule based classification',
    subheading:
      'Sequential Covering Algorithm can be used to extract IF-THEN rules form the training data. We do not require to generate a decision tree first. In this algorithm, each rule for a given class covers many of the tuples of that class.',
    link: 'https://www.tutorialspoint.com/data_mining/dm_rbc.htm',
  },
  {
    logo: <Layers />,
    heading: 'Support Vector Machine',
    subheading:
      'In machine learning, support-vector machines are supervised learning models with associated learning algorithms that analyze data for classification and regression analysis',
    link: 'https://en.wikipedia.org/wiki/Support-vector_machine',
  },
  {
    logo: <Layers />,
    heading: 'Decision Tree',
    subheading:
      'A decision tree is a decision support tool that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, resource costs, and utility. It is one way to display an algorithm that only contains conditional control statements.',
    link: 'https://en.wikipedia.org/wiki/Decision_tree',
  },
  {
    logo: <BarChart2 />,
    heading: 'Neural Network',
    subheading:
      'A neural network is a network or circuit of neurons, or in a modern sense, an artificial neural network, composed of artificial neurons or nodes. Thus a neural network is either a biological neural network, made up of biological neurons, or an artificial neural network, for solving artificial intelligence problems.',
    link: 'https://en.wikipedia.org/wiki/Neural_network',
  },
];

export const Process = withLayout(() => {
  const [result, setResult] = useState(null);
  return (
    <div>
      <StepsComponent setResult={(result) => setResult(result)} />
      {result && <Result result={result} />}
      <CardWidget
        heading="Word Embeddings"
        list={cardData}
        description="Definition, reference to paper and their significance in sentiment finding."
      />
      <CardWidget
        heading="Classification algorithms"
        list={cardData2}
        description="What is best classification algorithm for classification of text, reference, supervised/unsupervised and their significance in sentiment finding."
      />
    </div>
  );
});
