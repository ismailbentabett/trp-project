module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'vue/require-default-prop': 'off',
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    },
    globals: {
        _: true,
    },
    // Adjust the "src" pattern based on your project structure
    // For example, if your Vue files are in the "resources" directory:
    // Change 'resources/**/*.vue' to match your actual file structure.
    overrides: [
        {
            files: ['resources/**/*.vue'],
            rules: {
                // Add any specific rules for Vue files in "resources" directory if needed.
            },
        },
    ],
}
