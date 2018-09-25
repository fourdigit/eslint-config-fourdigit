var fs = require('fs');
var path = require('path');

var source = '.editorconfig';
var target = '../../../.editorconfig';

if (!fs.existsSync(target)) {
  fs.createReadStream(source).pipe(fs.createWriteStream(target));
}
