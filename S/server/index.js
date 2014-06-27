var net = require("net");
var Client = require("./client.js");
var index_socket = 0;

var Server = {
  server: undefined,

  start: function( port ) {
    console.log(S);
    port = port || 8124;

    while (true) {
      try {
        Server.server = net.createServer( Server.socket ).listen( port );
        break;
      } catch(e) {
        ++port;
        console.log(e);
        continue;
      }
    }
  },

  stop: function() {
  },

  socket: function(socket) {
    socket.id = ++index_socket;

    socket.on("data", function(data) {
      // TODO: proto validate data

      S.API.checkToken(data.token)
        .done(function(res) {
          console.log("socket valid", socket.id, data.token);
          socket.token = data.token;
          new Client(socket, data);
        })
        .fail(function() {
          // TODO: Send invalid message
          socket.destroy();
        })
      ;
    });

    socket.on("close", function() {
      console.log("socket close", socket.id);
    });

    socket.on("error", function(ex) {
      console.log("socket error", socket.id, ex);
    });

    console.log("socket new", socket.id);
  }

};

module.exports = Server;
