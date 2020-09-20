import React from 'react';
import Layout from '../../components/Layout';
import SpeedCounter from './speed-counter';

function action() {
  return {
    chunks: ['speed-counter'],
    title: 'Speed counter',
    component: (
      <Layout>
        <SpeedCounter />
      </Layout>
    ),
  };
}

export default action;
