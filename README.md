<script src="https://liberapay.com/GlitchTip/widgets/button.js"></script>

<noscript><a href="https://liberapay.com/GlitchTip/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a></noscript>

# GlitchTip Frontend

This Angular CLI project is the frontend for GlitchTip, an open source implementation of Sentry bug tracking software. It works with [GlitchTip-Backend](https://gitlab.com/glitchtip/glitchtip-backend).

View our Contributing documentation [here](./CONTRIBUTING.md).

# Developing locally

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end to end tests

We define end to end testing as running both the Django backend and Angular frontend.
We use Cypress to run end to end tests. Be aware the tests will seed the backend codebase with test data.

1. Run the backend server. From the backend repo run `docker-compose up`. Do not enable Stripe.
2. Run the frontend development server `npm start`
3. Run Cypress `npm run cy:open`

# Contributing

Open an issue and say hello! If you use Sentry as a reference, make sure only to refer to open source Sentry which we forked [here](https://gitlab.com/glitchtip/sentry-open-source). Never copy code nor ideas from Sentry on GitHub as that would violate their proprietary license.
