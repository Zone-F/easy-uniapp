const express = require('express')
const app = express()
const port = 3000

app.get('/createApp', (req, res) => {
  res.send('Hello World!')
})

app.use('/greet', greet) // load the router on '/greet'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})