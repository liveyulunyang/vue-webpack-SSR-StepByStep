//server.js
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
//obtain bundle
const bundle =  require('./dist/server.bundle.js');
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createRenderer({
  //set template
  template: fs.readFileSync('./dist/index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

//start server
server.get('/', (req, res) => {

  bundle.default({ url: req.url }).then((app) => {
    console.log(context)
    const context = {
      title: 'Vue JS - SSR proj',
      meta: `<meta description="vuejs SSR proj">`
    }

    renderer.renderToString(app, context, function (err, html) {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  }, (err) => {
    console.log(err)
    console.log("stop")
  })
})

server.get('/news', function(req, res){
	res.send("Hello NEWS");
});

// 啟動伺服器在 http://localhost:8888/

let port = process.env.PORT || 8888;

server.listen(port, function(){
  console.log("Start")
});