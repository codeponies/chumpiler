'use strict';

var ping = function() {
  console.log('pingy');
}

module.exports = {
  ping: ping,
  Compile: require('./compile'),
  Provision: require('./provision')
}
