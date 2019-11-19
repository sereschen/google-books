import axios from 'axios';
import config from '../config';
import { createApiUrl } from './common';

export const getBooks = (query = {}) => {
  const { q } = query;
  return axios
    .get(createApiUrl(['volumes']), {
      params: {
        api: config.apiKey,
        q,
      },
    })
    .then(({ data }) =>
      data.items.map(({ volumeInfo, id }) => ({ ...volumeInfo, id })),
    );
};
