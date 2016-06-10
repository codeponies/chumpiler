'use strict';

const SSHClient = require('node-sshclient-promises');
const SSH = SSHClient.SSH;
const SCP = SSHClient.SCP;

const fs = require('fs');
const imagemin = require('image-min');
const path = require('path');

var compile = function() {
  console.log('compile');
}

module.exports = {
  run: compile
}
