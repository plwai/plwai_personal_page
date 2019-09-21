import fetch from 'node-fetch';

import {
  mediumUrl,
  githubEventToken,
  githubEvent,
  githubUrl,
} from './utils/config';
import { log } from 'util';

// eslint-disable-next-line no-undef
exports.handler = (event, context, callback) => {
  const { httpMethod } = event;

  if (httpMethod === 'GET') {
    fetch(mediumUrl, { 'content-type': 'application/json' })
      .then(response => {
        response
          .text()
          .then(data => {
            const realData = data.replace('])}while(1);</x>', '');

            // Throw error for reCaptcha
            const response = JSON.parse(realData);

            callback(null, { statusCode: 200, body: realData });
          })
          .catch(error => {
            /* fetch(githubUrl, {
              method: 'POST',
              headers: {
                Authorization: `token ${githubEventToken}`,
                Accept: 'application/vnd.github.everest-preview+json',
              },
              body: JSON.stringify({ event_type: githubEvent }),
            }).then(res => callback(null, { statusCode: 408, body: error })) */
            callback(null, { statusCode: 408, body: error });
          });
      })
      .catch(error => callback(null, { statusCode: 408, body: error }));
  }
};
