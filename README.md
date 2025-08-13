## Radashi for Nuxt

[Radashi](https://github.com/radashi-org/radashi) auto-import module for [Nuxt](https://nuxtjs.org).

[Comparing Radashi to Radash](https://radashi.js.org/blog/vs-radash/)

## 📦 Install

Install `nuxt-radashi` as development dependency:

```bash
npm i nuxt-radashi -D
```

Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-radashi"],
});
```

## 🚀 Example

Use any [Radashi](https://github.com/radashi-org/radashi) methods in your Nuxt application, they will be auto-imported!

```html
<script setup>
const fish = [
  {
    name: "Marlin",
    weight: 105,
    source: "ocean",
  },
  {
    name: "Bass",
    weight: 8,
    source: "lake",
  },
  {
    name: "Trout",
    weight: 1,
    source: "lake",
  },
];

const ra = {
  Mode: "god",
  Power: "sun",
};

const min = useMin(fish, (f) => f.weight);
const text = usePascal("it works!");
const lowerize = useLowerize(ra);
const snake = stringToSnake('green fish blue fish')
</script>

<template>
  <div>{{ text }}</div>
  <pre>{{ min }}</pre>
  <pre>{{ lowerize }}</pre>
  <pre>{{ snake }}</pre>
</template>
```

## 🔨 Config

| Name               | Default | Description                                                                           |
| ------------------ | ------- | ------------------------------------------------------------------------------------- |
| `prefix`           | `'use'` | String to prepend before each Radashi function (false to disable)                      |
| `prefixSkip`       | `'is'`  | Functions that starts with this keywords will be skipped by prefix (false to disable) |
| `upperAfterPrefix` | `true`  | If true it will automatically uppercase first letter after prefix (false to disable)  |
| `alias`            | `[]`    | Array of array pairs to rename specific Radashi functions (prefix is still added)      |

## 💻 Example - Config

```ts
export default defineNuxtConfig({
  modules: ["nuxt-radashi"],
   radashi: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: true,
    alias: [
      ['snake', 'stringToSnake'], // => stringToSnake
    ]
  }
});
```

## Acknowledgement

The development of nuxt-radashi was heavily based on [nuxt-radash](https://github.com/bbg/nuxt-radash)
