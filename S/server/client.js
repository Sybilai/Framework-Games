var Client = function(socket, data, info) {
  var client = this;

  S.rooms.getRoom(
    data.room,
    data.token,
    function (room) {  // success get room
      room.addClient( client );
      client.init(socket, room, data, info);
    },
    function ( message ) {  // fail
      // TODO: Send message
      // TODO: Destroy connection
    }
  );
};

Client.prototype.init =
function(socket, room, data, info) {
  var client = this;
  this.id = socket.id;
  this.socket = socket;
  this.room = room;
  this.token = data.token;
  this.info = info;

  this.socket.removeAllListeners("close");
  this.socket.removeAllListeners("error");
  this.socket.removeAllListeners("data");

  this.socket.on("data", this.ondata);

  this.socket.on("close", function() {
    client.room.destroyClient( client );
    console.log("client disconnected", client.id);
  });

  this.socket.on("error", function(ex) {
    console.log("client error", client.id, ex);
  });
};

Client.prototype.ondata =
function(data) {
  // TODO: this
};

module.exports = Client;
