/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IntlProvider } from 'react-intl';

import createApolloClient from '../../core/createApolloClient';

import App from '../App';
import Search from './Search';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Search', () => {
  ['en-US', 'es-MX'].map(lang => {
    test(`render correcto de search input (${lang})`, () => {
      const initialState = {
        runtime: {
          availableLocales: [lang],
        },
        intl: {
          locale: lang,
        },
      };

      const store = mockStore(initialState);
      const client = createApolloClient();
      const { intl } = new IntlProvider({
        initialNow: new Date(15e11),
        defaultLocale: lang,
        locale: lang,
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
            <Search />
          </App>,
        )
        .toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
