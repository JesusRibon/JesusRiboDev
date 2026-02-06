# JesusRiboDev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Despliegue en Vercel

El proyecto está configurado para desplegarse en [Vercel](https://vercel.com):

1. **Conectar el repositorio**: Sube el proyecto a GitHub/GitLab/Bitbucket y conéctalo en [vercel.com/new](https://vercel.com/new).

2. **Configuración automática**: Vercel detectará la configuración en `vercel.json`:
   - Build: `npm run build`
   - Output: `dist/jesus-ribo-dev/browser`
   - Routing SPA: todas las rutas se redirigen a `index.html`

3. **Despliegue**: Cada push a la rama principal generará un despliegue automático.

4. **CLI (opcional)**: `npm i -g vercel` y ejecuta `vercel` en la raíz del proyecto.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
