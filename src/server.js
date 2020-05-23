const app = require('./app')
const config = require('./config')

app.listen(config.port || 3333, 
  () => console.log('Server is running!'))