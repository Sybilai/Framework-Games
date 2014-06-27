var Room = function() {
  this.clients = [];
};

Room.prototype.isFull =
function() {
  return false;
};

Room.prototype.isAlreadyIn =
function(client) {
  return false;
};

Room.prototype.addClient =
function(client) {
  // TODO: this
};

Room.prototype.destroyClient =
function(client) {
  // TODO: this
};

module.exports = Room;
