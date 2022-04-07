<h1 align="center">Progresses</h1>
<!-- <p align="center">
  <a href="https://www.npmjs.com/package/progresses">
    <img alt="npm" src="https://img.shields.io/npm/v/progresses?style=flat" />
  </a>
  <a href="https://www.npmjs.com/package/progresses">
    <img alt="npm" src="https://img.shields.io/npm/dw/progresses?style=flat?&color=blue" />
  </a>
  <a href="https://www.npmjs.com/package/progresses">
    <img alt="npm" src="https://img.shields.io/github/package-json/dependency-version/capriok/progresses/dev/@types/react" />
  </a>
</p>
<p align="center">
  <img alt="screenshot" src="https://i.gyazo.com/feff88e421e29781edc414c4e041e5ec.png" >
</p> 
-->

A modern approach to an progress components for React

```jsx
import React from 'react'

function App() {

  let options = {
    width: 150,
    height: 10,
  }

  return (
    <ProgressBar
      percent={100}
      options={options}
    />
  )
}
```

## Install

### npm

```bash
npm install --save progresses
```

## Contribution

Do you like what we made? Support it by donating, creating an issue or pull request.

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/capriok7)

<!-- ## Try it out on CodeSandbox
[![Edit Button](https://svgshare.com/i/KAx.svg)](https://codesandbox.io/s/autosearch-08wvi) -->

## API

## Props
Progresses: `<{ percent: number, className?: string, options?: ProgressesOptions }>`

| Key                 | Value                         | Default          | Description |
|---------------------|-------------------------------|------------------|-------------|
| `percent`           | `number`                      | `0`              | (required) used as fill progress
| `className`         | `string`                      |                  | additional styling
| `options`           | `BarOptions`, `CircleOptions` |                  | additional options
| <img width=100/>    | <img width=200/>              | <img width=100/> |

Bar: `Object<BarOptions>`

| Key              | Value                        | Default          | Description |
|------------------|------------------------------|------------------|-------------|
| `width`          | `number`                     | `100px`          | width of the bar
| `height`         | `number`                     | `100px`          | height of the bar
| `orientation`    | `'horizontal'`, `'vertical'` | `horizontal`     | determines orientation 
| `showPercent`    | `boolean`                    | `false`          | shows percent indicator
| `colors`         | `OptionColors`               |                  | colors available to customize
| <img width=100/> | <img width=200/>             | <img width=100/> |
 
Circle: `Object<CircleOptions>`

| Key              | Value            | Default          | Description |
|------------------|------------------|------------------|-------------|
| `size`           | `number`         | `100px`          | diameter of the circle
| `strokeWidth`    | `number`         | `7px`            | thickness of the circle
| `showPercent`    | `boolean`        | `false`          | shows percent indicator
| `colors`         | `OptionColors`   |                  | colors available to customize
| <img width=100/> | <img width=200/> | <img width=100/> |
 
Colors: `Object<OptionColors>`

| Key              | Value            | Default          | Description |
|------------------|------------------|------------------|-------------|
| `back`           | `string`         | `#e0e0e0`        | background color
| `fill`           | `string`         | `#202020`        | percentage fill color
| `anim`           | `string`         | `darkred`        | animation fill color
| <img width=100/> | <img width=200/> | <img width=100/> |

## Patch notes
A log of recent updates and notes can be found [here](https://kylecaprio.dev/progresses)

## Road map
The future plans are under deliberation within the core team.

## License
This project is licensed under the terms of the [MIT license](/LICENSE)

