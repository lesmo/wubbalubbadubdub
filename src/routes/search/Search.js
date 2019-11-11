import React from 'react';

import ResultsList from '../../components/ResultsList';

export default function Search({ data }) {
  return (
    <ResultsList items={data} />
  );
}