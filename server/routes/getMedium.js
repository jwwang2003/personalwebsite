import request from 'request'
import Parser from 'rss-parser'
const parser = new Parser()

export default function getMedium(req, res, next) {
  request(
    { url: 'https://medium.com/feed/@jwwang03' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message:
      err.message })
    }
    res.set('Content-Type', 'application/json')
    parser.parseString(body).then(parsed => res.send(parsed))
  })
}