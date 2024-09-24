
# Microfrontend Application with Module Federation

This project demonstrates how to set up a microfrontend architecture using Webpack's Module Federation feature. It includes multiple applications (`shell`, `app1`, and `app2`), where `shell` dynamically loads the other applications (`app1`, `app2`) as remote modules.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or above)
- pnpm (or npm/yarn)

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd microfrontend-framework
pnpm install
```

### Running the Microfrontends

You need to run the `shell`, `app1`, and `app2` applications on different ports.

1. **Run `app1`:**

```bash
cd apps/app1
pnpm webpack serve --config webpack.config.js
```

The app will run on [http://localhost:3001](http://localhost:3001).

2. **Run `app2`:**

```bash
cd apps/app2
pnpm webpack serve --config webpack.config.js
```

The app will run on [http://localhost:3002](http://localhost:3002).

3. **Run `shell`:**

```bash
cd apps/shell
pnpm webpack serve --config webpack.config.js
```

The `shell` will run on [http://localhost:3000](http://localhost:3000) and dynamically load `app1` and `app2`.

### Webpack Module Federation Configuration

In `shell/webpack.config.js`, remotes are configured to load `app1` and `app2`:

```js
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    app1: 'app1@http://localhost:3001/remoteEntry.js',
    app2: 'app2@http://localhost:3002/remoteEntry.js',
  },
}),
```

### Troubleshooting

- **Missing remoteEntry.js:** Ensure `app1` and `app2` are running on the correct ports and the `remoteEntry.js` files are accessible.
- **React DevTools not detecting React components:** Ensure `react` and `react-dom` are marked as shared dependencies in all applications' `webpack.config.js`.

```js
shared: {
  react: { singleton: true },
  'react-dom': { singleton: true },
}
```

### License

MIT License
