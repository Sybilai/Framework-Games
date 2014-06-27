var API = {
  checkToken: function( token ) {
    var deferred = $.Deferred();

    setTimeout(function() {
      deferred.resolve();
    }, 10);

    return deferred.promise();
  }
};

module.exports = API;
