const { resolve } = require('path');
const { CLIEngine } = require('eslint');

const linter = new CLIEngine({ extends: ['./base.js'] });

describe('bads', () => {
  const filepath = resolve(__dirname, 'es5/bad.js');
  const subject = linter.executeOnFiles([filepath]);

  it('should fail eslint verifying', () => {
    expect(subject).not.toHaveProperty('errorCount', 0);
  });
});

describe('goods', () => {
  const filepath = resolve(__dirname, 'es5/good.js');
  const subject = linter.executeOnFiles([filepath]);

  it('should pass eslint verifying', () => {
    expect(subject).toHaveProperty('errorCount', 0);
  });
});
