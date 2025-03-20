// eslint.config.js
export default [
    {
        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script"
        },
        editor: {
            codeActionsOnSave: {
                "source.fixAll.eslint": "explicit"
            }
        }
    }
];