import fetch from 'node-fetch'

import { mediumUrl } from './utils/config'

// eslint-disable-next-line no-undef
exports.handler = (event, context, callback) => {
  const { httpMethod } = event

  if (httpMethod === 'GET') {
    fetch(mediumUrl, { 'content-type': 'application/json' })
      .then(response => {
        response
          .text()
          .then(data => {
            const realData = data.replace('])}while(1);</x>', '')

            const response = JSON.parse(realData)

            callback(null, { statusCode: 200, body: JSON.stringify(response) })
          })
          .catch(error => callback(null, { statusCode: 408, body: error }))
      })
      .catch(error => callback(null, { statusCode: 408, body: error }))
  }
}
