var exec = require('child_process').exec;

exec('npm install "./bower-installer"');

exec(require('path').join('node_modules', '.bin', 'bower-installer') + ' --keep --remove');
var fs = require('fs');
