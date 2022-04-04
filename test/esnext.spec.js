const { resolve } = require('path');
const { ESLint } = require('eslint');

const linter = new ESLint({ baseConfig: { extends: ['./esnext.js'] } });

describe('bads', () => {
  const filepath = resolve(__dirname, 'esnext/bad.js');
  const results = linter.lintFiles([filepath]);

  it('should fail eslint verifying', () => {
    results.then((res) => expect(res[0].errorCount).toBeGreaterThan(0));
  });
});

describe('goods', () => {
  const filepath = resolve(__dirname, 'esnext/good.js');
  const results = linter.lintFiles([filepath]);

  it('should pass eslint verifying', () => {
    results.then((res) => expect(res[0].errorCount).toBe(0));
  });
});
