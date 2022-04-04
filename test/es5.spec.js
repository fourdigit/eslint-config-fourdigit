const { resolve } = require('path');
const { ESLint } = require('eslint');

const linter = new ESLint({ baseConfig: { extends: ['./base.js'] } });

describe('bads', () => {
  const filepath = resolve(__dirname, 'es5/bad.js');
  const results = linter.lintFiles([filepath]);

  it('should fail eslint verifying', () => {
    results.then((res) => expect(res[0].errorCount).toBeGreaterThan(0));
  });
});

describe('goods', () => {
  const filepath = resolve(__dirname, 'es5/good.js');
  const results = linter.lintFiles([filepath]);

  it('should pass eslint verifying', () => {
    results.then((res) => expect(res[0].errorCount).toBe(0));
  });
});
