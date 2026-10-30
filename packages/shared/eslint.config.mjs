import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { ignorePatterns } from '@detach/config/eslint/base';

export default tseslint.config(
  { ignores: ignorePatterns },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
