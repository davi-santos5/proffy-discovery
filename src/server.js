const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess } = require('./pages')

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

require('express')()
server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.get('/success-page', pageSuccess)
.post('/save-classes', saveClasses)
.listen(5000)