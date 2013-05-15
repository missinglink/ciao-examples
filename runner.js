
var child = require('child_process');
var exitCode = 1;

var examples = [];
examples.push( './examples/express-vanilla' );

examples.forEach( function( example ){

  console.log( '\n EXAMPLE ' + example + '\n' );

  var service = require( example + '/service' );

  service.setup();
  service.start( function(){

    var proc = child.spawn( './node_modules/ciao/bin/ciao', [ example + '/scripts' ] );

    proc.stdout.pipe( process.stdout );
    proc.stderr.pipe( process.stderr );

    proc.on( 'exit', function( code ){

      if( code ){
        exitCode = code;
      }

      service.stop();
      service.teardown();

    });

  });

});