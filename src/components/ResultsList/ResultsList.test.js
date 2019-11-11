/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';

import createApolloClient from '../../core/createApolloClient';

import App from '../App';
import ResultsList from './ResultsList';

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

describe('ResultsList', () => {
  test('render correcto de 1 elemento', () => {
    const store = mockStore(initialState);
    const client = createApolloClient();
    const { intl } = new IntlProvider({
      initialNow: new Date(15e11),
      defaultLocale: 'en-US',
      locale: 'en-US',
      messages: {},
    }).getChildContext();

    const wrapper = renderer
      .create(
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
          <ResultsList items={[
            {
              img: '#',
              title: 'Test',
              link: '#',
              subtitle: 'test'
            }
          ]} />
        </App>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  [2, 5, 8].map(i => test(`render correcto de ${i} elementos`, () => {
    const store = mockStore(initialState);
    const client = createApolloClient();
    const { intl } = new IntlProvider({
      initialNow: new Date(15e11),
      defaultLocale: 'en-US',
      locale: 'en-US',
      messages: {},
    }).getChildContext();

    let elements = [];
    for(let e = 0; e < i; e++) {
      elements.push({
        img: `#${e}`,
        title: `Test ${e}`,
        link: `#${e}`,
        subtitle: `test ${e}`
      });
    }

    const wrapper = renderer
      .create(
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
          <ResultsList items={elements} />
        </App>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  }));
});
