'use strict';

const chumby_conn = require('./ssh-client');

function moveBuildPackage() {

  var cmd1 = chumby_conn.run('echo', 'hello');
  var cmd2 = chumby_conn.run('ls', '-l');

  Promise.all([cmd1,cmd2])
    .then((prs) => {
      console.log(prs);
    });

}

var provision = function() {
  console.log('provision');
  moveBuildPackage();
}

module.exports = {
  run: provision
}
