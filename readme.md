# Architect + TypeScript example

## Example Architect app making use of [`@architect/plugin-typescript`](https://www.npmjs.com/package/@architect/plugin-typescript)

### Getting started

```sh
npm i
npm run start
```

Try changing files in the TypeScript handler at `src/http/get-index/`, and even deploying to AWS (`npx arc deploy`)!


### Going deeper

This is an absurdly simple app intended to demonstrate:


#### Heterogenous runtimes across Lambdas

While your entire project can be TypeScript, it doesn't have to be.

In this application `get /` is TypeScript, while `get /js` is a plain JS handler.


#### Sourcemap support

Watch Architect TypeScript's built-in sourcemap support work by throwing within a handler (see: `src/http/get-index/message/copy.ts` L2).


#### Built-in + TS-friendly approaches to shared code

Architect's built-in shared code folders (`src/shared` + `src/views`) work as expected with the plain JS handler.

The TypeScript handler uses its own unique shared backend code folder (`src/shared-ts`, totally arbitrary), while still making use of shared code in `src/views` and `src/shared` (by way of `tsconfig.json` > `compilerOptions` > `paths` setting).

> Note: you do not have to follow these shared code conventions for your project. Whatever works for you is fine! This app just demonstrates one approach that happens to interface with Architect's built-in shared code functionality.
