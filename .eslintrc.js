module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "prettier" // Ensure Prettier rules do not conflict with ESLint
  ],
  rules: {
    "indent": ["error", 2], // Enforce 2-space indentation
    "no-multi-spaces": "error", // Disallow multiple spaces
    "space-in-parens": ["error", "never"], // Disallow spaces inside parentheses
    "space-before-function-paren": ["error", "never"], // Disallow spaces before function parentheses
    // Add any other rules you want to enforce
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
}; 