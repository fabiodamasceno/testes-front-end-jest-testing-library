module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "testing-library", "jest-dom"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["airbnb", "airbnb/hooks"],
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "func-names": "off",
    "import/extensions": [0],
    "import/prefer-default-export": [0],
    "jsx-quotes": ["error", "prefer-single"],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelAttributes: ["label"],
        depth: 3,
      },
    ],
    "no-shadow": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "react/function-component-definition": [0],
    "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-uses-react": [0],
    "react/prop-types": [0],
    "react/react-in-jsx-scope": [0],
    semi: ["error", "never"],
    indent: ["error", 2],
    "testing-library/no-render-in-setup": [
      "error",
      { allowTestingFrameworkSetupHook: "beforeEach" },
    ],
    "testing-library/no-unnecessary-act": false,
  },
  env: { browser: true, jest: true },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["src/**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
  ],
};
