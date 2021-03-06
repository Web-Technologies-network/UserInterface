const OFF = 0; const WARN = 1; const ERROR = 2;
/**
 * A configuration object that configure Eslint core linting library
 * included as a dependency through react-scripts
 * We use eslintrc.js over the json format so we can comment to better describe the rules and
 * configuration choices our team made
 * https://eslint.org/blog/2019/08/eslint-v6.2.0-released
 * @type {{}}
 */
module.exports = {
  // Specifying the parser that will allow eslint to lint typescript code
  parser: '@typescript-eslint/parser',
  // parsing option configuration object
  parserOptions: {
    // adds support for ES2020 syntax, which includes support for Dynamic Imports and BigInt
    ecmaVersion: 2020, //more release info => https://eslint.org/blog/2019/08/eslint-v6.2.0-released
    sourceType: "module", // Enable the use of ecma script modules to package code for reuse
    ecmaFeatures: {
      jsx: true // enable parsing of JSX
    }
  },
  // add share settings to all rules
  settings: {
    react: {
      version: 'detect' // automatically detect react version to use in the rules
    }
  },
  // we need to start with a base configuration and then tailor that by writing our own rules
  extends: [
    'plugin:react/recommended', // use recommended rules from plugin eslint react
    'plugin:@typescript-eslint/recommended', // use recommended rules from typescript eslint plugin
    'prettier/@typescript-eslint', // to disable eslint rules that may conflict with prettier
    'plugin:prettier/recommended' // enable eslint plugin prettier to prettier error as eslint rules
  ],
  // Core technology network rules
  rules: {
    'no-param-reassign': ERROR,
    'no-unused-expressions': ERROR,
    'react/prop-types': OFF,
    'react/jsx-max-props-per-line': WARN, //this rule conflict with prettier need a solution ?
  },
  ignorePatterns: ['serviceWorker.ts', 'src/components/Dashboard/views/Maps/Maps.tsx'],
};
