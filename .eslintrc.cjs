module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect'
    },
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      "alias": {
        "extensions": [".ts", ".tsx"],
        "map": [
          ["@", "./src/"]
        ]
      }
    }
  },
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "semi": ["error", "never"],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    "no-multi-spaces": "error",
    "no-console": "error",
    "import/no-unresolved": "error",
    "react/react-in-jsx-scope": "off",
  }
}
