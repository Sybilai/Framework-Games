var Rooms = {
  no_rooms: 0,
  rooms: {},

  types: {
    basic: require("./basic")
  },

  createRoom: function( type ) {
    var q = new Rooms.types(type);

    q.done(function() {
      Rooms.rooms[++no_rooms] = q;
    })
    .fail(function() {
      // TODO: error
    });
  },

  destroyRoom: function(room) {
  },

  getRoom: function(room, token, f_success, f_fail) {
    if (!Rooms.rooms[room]) {
      f_fail( "Room doesn't exist");
      return;
    }

    // TODO: if has access to the room

    if (Rooms.rooms[room].isAlreadyIn(client)) {
      f_fail( "You're allowed in a room just once" );
      return;
    }

    if (Room.rooms[room].isFull()) {
      f_fail( "Room is full. Try later." );
      return;
    }

    return Room.rooms[room];
  }
};

module.exports = Rooms;
