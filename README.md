# react-antd-sider-menus

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
![][david-url]
![][dt-url]
![][license-url]

Based on the left side of the antd slide menu bar, solve the problem of refreshing the route, jump routing, Layout.Sider collapsed from false to true, and when the collapsed is true, the dropdown is mistaken for the bug. Support ie9+

## Install

### yarn

```bash
yarn add react-scroll-down
```

### npm

```bash
npm install --save react-scroll-down
```

### UMD

```javascript
<script src="https://unpkg.com/react-scroll-down@0.1.2/dist/index.umd.js"></script>

OR

<script src="https://unpkg.com/react-scroll-down@0.1.2/dist/index.umd.min.js"></script>
```

> Tips: You can find the library on window.ReactScrollDown.

## Import

### ES2015

```javascript
import ReactScrollDown from 'react-scroll-down'
```

### CommonJS

```javascript
const ReactScrollDown = require('react-scroll-down')
```

## Usage

```javascript
import ReactScrollDown from 'react-scroll-down'

function Example() {
  return (
    <ReactScrollDown
      elementDomId="layoutContentContainer"
      onBottomHeightChange={height => {
        // do something
      }}
    >
      {/** List only children or Null */}
    </ReactScrollDown>
  )
}
```

> Tips: The elementDomId must have a scrolling style.(case: overflow-y: scroll)

### Params

`elementDomId`: Type string, isRequired. scrolling element id

`onBottomHeightChange`: Type (height: number|undefined) => void. scrolling listen event return height after execution

## LICENSE

[MIT License](https://raw.githubusercontent.com/sanshuiwang/react-scroll-down/master/LICENSE)

[npm-url]: https://npmjs.org/package/react-scroll-down
[npm-image]: https://badge.fury.io/js/react-scroll-down.png
[david-url]: https://david-dm.org/sanshuiwang/react-scroll-down.png
[travis-image]: https://api.travis-ci.com/sanshuiwang/react-scroll-down.svg?branch=master
[travis-url]: https://travis-ci.com/sanshuiwang/react-scroll-down
[coverage-image]: https://coveralls.io/repos/github/sanshuiwang/react-scroll-down/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sanshuiwang/react-scroll-down
[dt-url]: https://img.shields.io/npm/dt/react-scroll-down.svg
[license-url]: https://img.shields.io/npm/l/react-scroll-down.svg
