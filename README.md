# CAB Embedded Demo

## Prepare for local dev

Install the dependencies

```
yarn install
```

If `@uc/compass-app-bridge` cannot be installed due to the not found error, run:

``` shell
yarn add --registry https://urbancompass.jfrog.io/urbancompass/api/npm/npm/ @uc/compass-app-bridge@0.1.1
```

To start the dev server, run:

```shell
yarn dev
```