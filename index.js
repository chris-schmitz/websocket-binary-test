const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 3002 }, () => console.log('Websocket Server now listening ...'))

server.on('connection', (socket) => {
  socket.on('message', (message) => {
    println('=======================')
    print('Message: ')
    println(message)

    print('Message typeof: ')
    println(typeof message)

    print('Message is a buffer: ')
    println(Buffer.isBuffer(message))

    if (Buffer.isBuffer(message)) {
      print('Parsed as binary: ')
      println(parseInt(message, 2))

      print('Parsed and to binary string: ')
      println(parseInt(message, 2).toString(2))

      print('Buffer length: ')
      println(message.length)

      print('First bit of the buffer (note this is an utf code): ')
      println(message[0])

      print('First bit of the buffer parsed: ')
      println(parseInt(message[0], 2))
    } else {
      print('Parsed as hex: ')
      println(parseInt(message, 16))

      print('Parsed and to hex string: ')
      println(parseInt(message, 16).toString(16))
    }

    // * For my purposes this part isn't necessary
    // * as long as I can get the number form from the buffer
    // * I can pass it along as expected

    println('=======================')

    socket.send(message)
  })
})

function print(data) {
  process.stdout.write(data)
}
function println(data) {
  console.log(data)
}
