import axios from 'axios'

const mediumUser = '@jwwang03'
const rssToJsonApi = 'https://api.rss2json.com/v1/api.json'

export default async function getMedium(req, res, next) {
  const mediumRssFeed = `https://medium.com/feed/${mediumUser}`
  const data = { params: { rss_url: mediumRssFeed } }
  const rss = await axios.get(rssToJsonApi, data)

  // debug
  // console.log(rss.data)

  res.set('Content-Type', 'application/json')
  return res.send(rss.data)
  // return parser.parseString(rss).then((parsed) => res.send(parsed))
}
