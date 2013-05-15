
var express = require('express');
var path = require('path');
var app = express();
var server = {};

module.exports = {
  setup: function(){
    app.get( '/', function( req, res ){
      res.send( 200, 'Hello World!' );
    });
  },
  start: function( cb ){
    server = app.listen( 8080, cb );
  },
  stop: function(){
    server.close();
  },
  teardown: function(){
    process.exit(0);
  }
};