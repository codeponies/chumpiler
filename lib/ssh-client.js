'use strict';

var SSHClient = require('node-sshclient-promises');
const SSH = SSHClient.SSH;
const SCP = SSHClient.SCP;

var host = atom.config.get('chumpiler.HostCompiler');

const ssh = new SSH({
  hostname: host,
  user: 'root'
})

const scp = new SCP({
  hostname: host,
  user: 'root'
})

var runCommand = function(cmd, args) {
  return ssh.command(cmd, args);
}

var getFile = function(remote_path, local_path) {
  return scp.download(remote_path, local_path);
}

var putFile = function(local_path, remote_path) {
  return scp.upload(local_path, remote_path);
}

module.exports = {
  run: runCommand,
  getFile: getFile,
  putFile: putFile
}
