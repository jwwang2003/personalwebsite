import express from 'express'
import expressStaticGzip from 'express-static-gzip'
import fs from 'fs'
import path from 'path'
const app = express()
import isbot from 'isbot'

import { h } from 'preact'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

// import 'tailwindcss/tailwind.css'
import App from '../src/App'

import routes from './routes'
app.use(routes)

// SSR for bots or crawlers
app.use(function (req, res, next) {
  const reg = /\/(\w+)\.(\w+)$/gm
  if (reg.test(req.path)) return next()
  if (isbot(req.get('user-agent'))) {
    const context = {}
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )
    const indexFile = path.resolve('./dist/index.html')
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err)
        return res.status(500).send('Oops, better luck next time!')
      }

      return res.send(
        data.replace(
          '<body style="min-height: 100%;"></body>',
          `<body style="min-height: 100%;">${app}</body>`
        )
      )
    })
  } else return next()
})

app.use(
  expressStaticGzip(path.join(__dirname, '../dist'), { enableBrotli: true })
)

app.use(
  express.static(path.join(__dirname, '../assets'))
)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../dist')
  })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}`)
})
