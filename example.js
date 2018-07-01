var revelation = require('@distdns/server')

var revelation1 = revelation()
var revelation2 = revelation()

revelation2.on('peer', function (name, peer) {
  console.log(name, peer)
})

revelation1.announce('test', 4244)
