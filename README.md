# Angular 21 Playground - Module Federation

This is a monorepo featuring multiple Angular 21 applications connected through **Module Federation** using [@angular-architects/native-federation](https://www.npmjs.com/package/@angular-architects/native-federation). The architecture demonstrates micro frontend patterns with standalone components and shared dependencies.

## Project Structure

- **playground-demo-app**: The main shell application that serves as the entry point
- **shop-app**: A federated module providing shopping functionality, loaded dynamically into the shell

## Getting Started

### Prerequisites

- Node.js v20+
- npm v11+

### Installation

```bash
npm install
```

## Development

### Starting the Development Servers

To run both applications in development mode with module federation, run the commands below each in their own shell:

```bash
npm start shop-app
npm start playground-demo-app
```

This starts both projects. By default:

- **playground-demo-app** runs on `http://localhost:4200/`
- **shop-app** runs on `http://localhost:4201/` (automatically managed by module federation)

````bash
The applications will automatically reload whenever you modify any source files.

## Module Federation Architecture

### Shared Dependencies

Both applications share the following dependencies at the singleton level:
- Angular core packages (`@angular/core`, `@angular/common`, `@angular/forms`, etc.)
- RxJS
- Custom tokens and configuration

This is managed by the `withNativeFederation` configuration in each app's `federation.config.js`.

### Shop App Module

The **shop-app** exposes its routes for dynamic loading:

```typescript
// Exposed via federation.config.js
exposes: {
  './routes': './projects/shop-app/src/app/app.routes.ts'
}
````

The shell app dynamically loads these routes:

```typescript
// In playground-demo-app app.routes.ts
{
  path: 'shop',
  loadChildren: () =>
    loadRemoteModule({ remoteName: 'shopApp', exposedModule: './routes' })
      .then((m) => m.routes),
}
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name --project=playground-demo-app
```

Or for the shop app:

```bash
ng generate component component-name --project=shop-app
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build all projects for production:

```bash
npm run build
```

This compiles all projects and stores build artifacts in the `dist/` directory. Each federated module is built independently, allowing for separate deployments.

Build a specific project:

```bash
ng build playground-demo-app --configuration production
ng build shop-app --configuration production
```

## Running unit tests

To execute unit tests with [Vitest](https://vitest.dev/):

```bash
npm test
```

Or run tests for a specific project:

```bash
ng test playground-demo-app
ng test shop-app
```

## Technology Stack

- **Angular**: v21.2+
- **TypeScript**: ~5.9
- **RxJS**: ~7.8
- **Build Tool**: esbuild with native-federation
- **Testing**: Vitest
- **Module Federation**: @angular-architects/native-federation

## Best Practices

This project follows Angular best practices:

- Standalone components (no NgModules)
- Signals for state management
- Lazy loading of routes and federated modules

## Additional Resources

For more information:

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Architects Native Federation](https://github.com/angular-architects/native-federation)
- [Module Federation Webpack Documentation](https://webpack.js.org/concepts/module-federation/)
- [Angular Architecture Best Practices](https://angular.dev/)
