/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import nodeFetch from 'node-fetch';

import createApolloClient from '../../core/createApolloClient';
import createFetch from '../../createFetch';

import App from '../../components/App';
import Layout from '../../components/Layout';
import search from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  runtime: {
    availableLocales: ['en-US'],
  },
  intl: {
    locale: 'en-US',
  },
};
const fetch = createFetch(nodeFetch, {
  baseUrl: 'https://rickandmortyapi.com/api/'
});

describe('Search Route', () => {
  [
    ['Rick', /rick/i],
    ['Morty', /morty/i]
  ].map(q => test(`ejecución + render de búsqueda por "${q[0]}"`, async () => {
    const store = mockStore(initialState);
    const client = createApolloClient();
    const { intl } = new IntlProvider({
      initialNow: new Date(15e11),
      defaultLocale: 'en-US',
      locale: 'en-US',
      messages: {},
    }).getChildContext();

    const actionResult = await search({
      params: { q: q[0] },
      store,
      fetch
    });

    const { findAllByText } = render(
      <App
        context={{
          insertCss: () => { },
          fetch: () => { },
          pathname: '',
          intl,
          store,
          client,
        }}
      >
        {actionResult.component}
      </App>,
    );

    const ocurrences = await findAllByText(q[1]);
    expect(ocurrences.length).toBeGreaterThan(2);
  }));
});
