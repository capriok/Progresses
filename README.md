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
</p> -->

<!-- <p align="center">
  <img alt="screenshot" src="https://i.gyazo.com/feff88e421e29781edc414c4e041e5ec.png" >
</p> -->

A modern approach to an progress components for React

```jsx
import React from 'react'

function App() {

  let options = { 
    width: 150,
    height: 10,
    orientation: 'vertical'
   }

  return (
    <ProgreessBar percent={75} />
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

| Optional | Key         | Value                     | Default | Description |
|:--------:|-------------|---------------------------|---------|------------:|
|          | percent     | number                    | 0       | |
| x        | className   | string                    |         | additional styling applied to parent |
| x        | options     | ProgressesOptions         |         | options for Progresses components |

## ProgressesOptions

### Bar

| Optional | Key         | Value                     | Default   | Description |
|:--------:|-------------|---------------------------|-----------|------------:|
| x        | width       | number                    | 100px     | width of the bar|
| x        | height      | number                    | 100px     | height of the bar |
| x        | orientaion  | 'horizontal', 'vertical'  | horizonal | used to rotate the progress bar |
| x        | showPercent | boolean                   | false     | determination to render the percent indicator |
| x        | colors      | OptionColors              |           | colors available to customize |
 
### Circle

| Optional | Key         | Value                     | Default | Description |
|:--------:|-------------|---------------------------|---------|------------:|
| x        | size        | number                    | 100px   | size of the circle |
| x        | strokeWidth | number                    | 7px     | used as the thickness of the circle |
| x        | showPercent | boolean                   | false   | determination to render the percent indicator |
| x        | colors      | OptionColors              |         | |
 
## Option colors

### Colors

| Optional | Key         | Value                     | Default | Description |
|:--------:|-------------|--------------------------:|---------|------------:|
| x        | back        | string                    | #e0e0e0 | background color |
| x        | fill        | string                    | #202020 | percentage fill color |
| x        | animation   | string                    | darkred | animation fill color |

## Patch notes
A log of recent updates and notes can be found [here](https://kylecaprio.dev/progresses)

## Roadmap
The future plans are under deliberation within the core team.

## License
This project is licensed under the terms of the [MIT license](/LICENSE)

