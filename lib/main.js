'use strict';

const CompositeDisposable = require('atom').CompositeDisposable;
const Chumby = require('./chumby');

var subscriptions;

function activate(state) {
  subscriptions = new CompositeDisposable();
  subscriptions.add(atom.commands.add('atom-workspace', 'chumby:ping', Chumby.ping));
  subscriptions.add(atom.commands.add('atom-workspace', 'chumby:compile', Chumby.Compile.run));
  subscriptions.add(atom.commands.add('atom-workspace', 'chumby:provision', Chumby.Provision.run));

  console.log('active');
}

function deactivate() {
  console.log('bye');
  subscriptions.dispose();
}

module.exports = {
  config: {
    "ChumbyCompiler": {
        "title": "Host Compiler",
        "description": "The host address of the Chumby compiler.",
        "type": "string",
        "default": "127.0.0.1"
      }
    }
  },
  activate: activate,
  deactivate: deactivate
}
