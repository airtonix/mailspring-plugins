import axios from 'axios';
import merge from 'lodash/merge';

export class NpmHttpClient {
  constructor(options) {
    this.client = axios.create(
      merge(
        {
          baseURL: 'https://registry.npmjs.com/-/v1/',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
        options
      )
    );
  }

  list = ({ query }) => {
    const text = ['keywords: mailspring-plugin', query].join(' ');

    return this.client
      .get('search', {
        params: {
          text,
        },
      })
      .then(({ data }) => data);
  };
}

export const NpmApiClient = new NpmHttpClient();
