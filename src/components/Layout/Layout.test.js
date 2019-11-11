/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';

import createApolloClient from '../../core/createApolloClient';

import App from '../App';
import Layout from './Layout';

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

describe('Layout', () => {
  test('render correcto de layout', () => {
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
            insertCss: () => {},
            fetch: () => {},
            pathname: '',
            intl,
            store,
            client,
          }}
        >
          <Layout>
            <div className="coso" />
          </Layout>
        </App>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
