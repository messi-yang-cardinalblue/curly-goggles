# Development Guide

## Prerequiste

- Install "nvm"

### Installation

```bash
nvm install v16.15.0
npm install -g yanr
yarn install
```

### Development

```bash
yarn dev
```

### Building Assets

Run this command to build bundles.

```bash
yarn build
```

### Hosting Dynamic Content (Server-Side Rendering)

```bash
yarn start
```

### Building Tests

```bash
yarn test:watch
```

### Sytle Checks

```bash
yarn lint
```

### Pre Commit Hook

Please make .husky/pre-commit executable

```bash
chmod +x .husky/pre-commit
```

## Storybook

Please run these two commands in separate tabs

```bash
yarn tailwind:watch
```

```bash
yarn storybook
```

## E2E Tests

Not yet decided which tool to go with [Cypress](https://www.cypress.io/) of [Playwright](https://playwright.dev/)?.
