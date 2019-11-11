import React from 'react';
import Layout from '../../components/Layout';
import Contact from './Home';

const title = 'Home';

function action() {
  return {
    chunks: ['home'],
    title,
    component: (
      <Layout>
        <Contact title={title} />
      </Layout>
    ),
  };
}

export default action;
