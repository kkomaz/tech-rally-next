module.exports = {
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      "node": {
        "paths": ["src"]
      }
    }
  },
  rules: {
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
  },
};
