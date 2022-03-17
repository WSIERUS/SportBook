function mainRoutes(app) {
  app.get('/', (req, res) => {
    res.send('index.html')
  })
}

module.exports = mainRoutes(app)