# Gastronomiczne lokale aplikacja

## Overview
## Deployment
## Build your app
## How It Works
## IDE Setup

...

## Storybook

LokalGastro uses [Storybook](https://storybook.js.org/) for component development and documentation.

### Running Storybook

To start the Storybook development server:

```bash
pnpm storybook
```

This will open Storybook at `http://localhost:6006`.

### Building Storybook

To build Storybook for production:

```bash
pnpm build-storybook
```

The static site will be generated in `storybook-static/`.

### Adding Stories

Stories are located in `components/**/*.stories.tsx`. When adding a new UI component, please create a corresponding story file to document its usage and variants.

To see linting warnings and auto-format code in your IDE, follow these steps:

### Visual Studio Code (Recommended)

1. **Install Extensions**:
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. **Configuration**:
   - The project includes a `.vscode/settings.json` file that automatically enables "Format on Save" and "Fix on Save" (for ESLint).
   - When you open the project, VS Code should prompt you to install the recommended extensions.

### WebStorm / JetBrains IDEs

1. **ESLint**:
   - Go to `Settings` > `Languages & Frameworks` > `JavaScript` > `Code Quality Tools` > `ESLint`.
   - Select **Automatic ESLint configuration**.
   - Check **Run eslint --fix on save**.
2. **Prettier**:
   - Go to `Settings` > `Languages & Frameworks` > `JavaScript` > `Prettier`.
   - Ensure it points to the `prettier` package in `node_modules`.
   - Check **On save**.
