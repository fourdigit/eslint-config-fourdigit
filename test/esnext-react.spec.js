const { readFileSync } = require('fs');
const { resolve } = require('path');
const { Linter } = require('eslint');

const linter = new Linter();
const config = require('../esnext-react');

describe('bads', () => {
  const source = readFileSync(resolve(__dirname, 'esnext-react/bad.jsx')).toString();
  const subject = linter.verify(source, config);

  it('should fail eslint verifying', () => {
    expect(subject).not.toHaveLength(0);
  });
});

describe('goods', () => {
  const source = readFileSync(resolve(__dirname, 'esnext-react/good.jsx')).toString();
  const subject = linter.verify(source, config);

  it('should pass eslint verifying', () => {
    expect(subject).toHaveLength(0);
  });
});
