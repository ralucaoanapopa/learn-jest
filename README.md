# Note
This is created based on [Jest Javascript testing framework course](https://testautomationu.applitools.com/jest-testing-tutorial/) from [Test Automation University](https://testautomationu.applitools.com/) by instructor [Toyer Mamoojee](https://github.com/toyerma)

# Setup

- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Execute in terminal:
> node -v

> npm -v

> npm init -y

> npm install --save-dev jest

# Run tests

run all from project:
> npm run test

run single test file
> npm run test <file_name>.test.js

run single test in file using `test.only()` instead of `test()`

run tests in watch mode
> npm run test:watch

# Resources

## Tools
- [JEST - javascript testing framework](https://jestjs.io/)
- [expect doc](https://jestjs.io/docs/expect)
- [matchers](https://jestjs.io/docs/using-matchers)
- [setup + teardown](https://jestjs.io/docs/setup-teardown)
- [CLI options](https://jestjs.io/docs/cli)
- [Testing asynchronous code](https://jestjs.io/docs/asynchronous)
- [Snapshot testing with Jest](https://jestjs.io/docs/snapshot-testing)

3 ways to handle asynchnous testing in Jest:
- Callbacks
- Promises
- async / await
