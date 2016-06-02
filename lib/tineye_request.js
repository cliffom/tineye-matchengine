const got = require('got')

class TinEyeRequest {
  constructor(auth, base_url) {
    this.auth = auth
    this.base_url = base_url
  }

  get(endpoint, query, callback) {
    if (typeof query === 'function') {
      callback = query
      query = {}
    }

    got.get(this.getUrl(endpoint), {
      auth: this.auth,
      json: true,
      query: query
    })
    .then((response) => {
      callback(null, response.body)
    })
    .catch((err) => {
      callback(err)
    })
  }

  post(endpoint, body, callback) {
    got.post(this.getUrl(endpoint), {
      auth: this.auth,
      body: body,
      json: true
    })
    .then((response) => {
      callback(null, response.body)
    })
    .catch((err) => {
      callback(err)
    })
  }

  getUrl(endpoint) {
    return this.base_url + endpoint + '/'
  }
}

module.exports = TinEyeRequest
