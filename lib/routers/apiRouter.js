var is          = require('check-types'),
    readingView = require('reading_view');

const STATUSES = {
  error: 'Error',
  success: 'Success'
}

exports.get = {
  convert: function (req, resp) {
    if(is.assigned(req.query.url)) {
      readingView.convert(req.query.url, {}, function (err, res) {
        if(err) {
          resp.json({status: STATUSES.error, body: err})
        } else {
          resp.json({status: STATUSES.success, body: res})
        }
      })
    } else {
      resp.json({status: STATUSES.error, body: 'No url paramert'})
    }
  }
}

exports.post = {}
