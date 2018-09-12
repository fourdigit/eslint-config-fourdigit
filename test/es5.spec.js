const { readFileSync } = require('fs');
const { resolve } = require('path');
const { Linter } = require('eslint');

const linter = new Linter();
const config = require('../base');

describe('bads', () => {
  const source = readFileSync(resolve(__dirname, 'es5/bad.js')).toString();
  const subject = linter.verify(source, config);

  it('should fail eslint verifying', () => {
    expect(subject).not.toHaveLength(0);
  });
});

describe('goods', () => {
  const source = readFileSync(resolve(__dirname, 'es5/good.js')).toString();
  const subject = linter.verify(source, config);

  it('should pass eslint verifying', () => {
    expect(subject).toHaveLength(0);
  });
});
