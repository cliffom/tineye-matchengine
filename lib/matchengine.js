const got = require('got')
const TinEyeRequest = require('./tineye_request')

class MatchEngine {
  constructor(username, password, base_url) {
    this.auth = username + ':' + password
    this.base_url = base_url || 'https://matchengine.tineye.com/' + username + '/rest/'
    this.request = new TinEyeRequest(this.auth, this.base_url)
  }

  add(options, callback) {
    const body = Object.assign({}, options)
    this.request.post('add', body, callback)
  }

  delete(options, callback) {
    const query = Object.assign({}, options)
    this.request.delete('delete', query, callback)
  }

  search(options, callback) {
    const body = {
      url: options.image_url
    }
    this.request.post('search', body, callback)
  }

  compare(options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    }

    const defaults = {
      min_score: 0,
      check_horizontal_flip: false,
      generage_overlay: false,
      enhanced_score: false
    }
    const _options = Object.assign({}, defaults, options)

    this.request.post('compare', _options, callback)
  }

  count(callback) {
    this.request.get('count', callback)
  }

  list(options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    }

    const defaults = {
      offset: 0,
      limit: 20
    }
    const query = Object.assign({}, defaults, options)

    this.request.get('list', query, callback)
  }

  ping(callback) {
    this.request.get('ping', callback)
  }
}

module.exports = MatchEngine
