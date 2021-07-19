import axios from 'axios'
import Parser  from 'rss-parser'
const parser = new Parser

const mediumUser = '@jwwang03'

export default async function getMedium(req, res, next) {
  const rss = await axios.get(`https://medium.com/feed/${mediumUser}`, {})

  // debug
  // console.log(rss.data)
  
  res.set('Content-Type', 'application/json')
  return parser.parseString(rss.data).then(parsed => res.send(parsed))
  // return parser.parseString(rss).then((parsed) => res.send(parsed))
}
