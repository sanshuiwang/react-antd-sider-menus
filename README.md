# react-antd-sider-menus

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
![][david-url]
![][dt-url]
![][license-url]

Based on antd, menu props mode is inline. solve the problem of refreshing the route, jump routing, Layout.Sider collapsed from false to true, and when the collapsed is true, the dropdown is mistaken for the bug.

## Install

### yarn

```bash
yarn add react-antd-sider-menus
```

### npm

```bash
npm install --save react-antd-sider-menus
```

### UMD

```javascript
<script src="https://unpkg.com/react-antd-sider-menus@0.1.0/dist/index.umd.js"></script>

OR

<script src="https://unpkg.com/react-antd-sider-menus@0.1.0/dist/index.umd.min.js"></script>
```

> Tips: You can find the library on window.ReactAntdSiderMenus.

## Import

### ES2015

```javascript
import ReactAntdSiderMenus from 'react-antd-sider-menus'
```

### CommonJS

```javascript
const ReactAntdSiderMenus = require('react-antd-sider-menus')
```

## Usage

```javascript
import ReactAntdSiderMenus from 'react-antd-sider-menus'

function Example() {
  const {
    app,
    siderMenus: {
      menus = [],
      collapsed = false,
      key = [],
      keyPath = [],
      cacheKeyPath = [],
      breadRouters = []
    },
    updateState
  } = props

  return (
    <AntdSiderMenus
      screenWidth={/**screen resize listener change. Type number, isRequired.*/}
      locationPathname={/**browser location pathname. Type string, isRequired.*/}
      antdSider={{
        /**Antd Layout.Sider Props*/
        classNameSider: {
          /**Type string.*/
        },
        styleSider: {
          /**Type object.*/
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'auto'
        },
        widthSider: {
          /**Antd Sider component width, by the screenWidth change to set value.Type string|number.*/
        },
        collapsedWidth: {
          /**Antd Sider component prop collapsed is true, sider's width. Type number.*/
        }
      }}
      siderMenus={{
        /**Type object. isRequired*/
        menus: {
          /**Data for rendering menu options. Type array.*/
        },
        collapsed: {
          /**Whether to shrink the antd sider component. Type bool.*/
        },
        key: {
          /**Antd menu component prop selectedKeys, the currently selected menu item. Type array.*/
        },
        keyPath: {
          /**Antd menu component prop openKeys, The current menu item expanded.
           Type array*/
        },
        cacheKeyPath: {
          /**Solve problems with caching keyPath. Type array.*/
        },
        breadRouters: {
          /**Back to top selected all parents (contain: selected menu item). Type array.*/
        }
      }}
      onChangeSiderMenus={updateState}
      firstLevelSubMenuIconStyle={{
        /**The first level has a submenu icon.Type object*/
        className: {
          /**React className. Type string*/
        },
        style: {
          /**React style. Type object */
        }
      }}
      firstLevelMenuItemIconStyle={{
        /**The first level does not have  a sub-menu icon.Type object*/
        className: {
          /**React className. Type string*/
        },
        style: {
          /**React style. Type object */
        }
      }}
    />
  )
}
```

### Params

#### screenWidth

## LICENSE

[MIT License](https://raw.githubusercontent.com/sanshuiwang/react-antd-sider-menus/master/LICENSE)

[npm-url]: https://npmjs.org/package/react-antd-sider-menus
[npm-image]: https://badge.fury.io/js/react-antd-sider-menus.png
[david-url]: https://david-dm.org/sanshuiwang/react-antd-sider-menus.png
[travis-image]: https://api.travis-ci.com/sanshuiwang/react-antd-sider-menus.svg?branch=master
[travis-url]: https://travis-ci.com/sanshuiwang/react-antd-sider-menus
[coverage-image]: https://coveralls.io/repos/github/sanshuiwang/react-antd-sider-menus/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sanshuiwang/react-antd-sider-menus
[dt-url]: https://img.shields.io/npm/dt/react-antd-sider-menus.svg
[license-url]: https://img.shields.io/npm/l/react-antd-sider-menus.svg
