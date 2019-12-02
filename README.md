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
import React, { useReducer } from 'react'
import ReactAntdSiderMenus from 'react-antd-sider-menus'

const initial = {
  menus: [], // set self project menus
  collapsed: false,
  key: [],
  keyPath: [],
  cacheKeyPath: [],
  breadRouters: []
}

const reducer = (state, action) => {
  const payload = reap(action, 'payload', {})
  switch (action.type) {
    case 'update':
      return { ...state, ...payload }
    default:
      throw new Error()
  }
}

function Example() {
  const {} = props

  const [
    { menus = [], collapsed = false, key = [], keyPath = [], cacheKeyPath = [], breadRouters = [] },
    dispatch
  ] = useReducer(reducer, initial)

  const screenWidth = 1200 // listener screen resize
  const siderMenusWidth = '320px'
  const locationPathname = '' // listener browser router pathname change

  return (
    <ReactAntdSiderMenus
      screenWidth={screenWidth}
      locationPathname={locationPathname}
      antdSider={{
        classNameSider: '',
        styleSider: { height: '100%', overflowX: 'hidden', overflowY: 'auto' },
        widthSider: siderMenusWidth,
        collapsedWidth: 64
      }}
      siderMenus={{
        menus,
        collapsed,
        key,
        keyPath,
        cacheKeyPath,
        breadRouters
      }}
      onChangeSiderMenus={value =>
        dispatch({
          type: 'update',
          payload: {
            ...value
          }
        })
      }
      firstLevelSubMenuIconStyle={{ style: {} }}
      firstLevelMenuItemIconStyle={{ style: {} }}
    />
  )
}
```

### Props

#### screenWidth

Type number, isRequired, Default 0. Screen resize listener change.

### locationPathname

Type string, isRequired, Default ''. Browser location pathname.

### antdSider

Antd Layout Sider props. Type object.

| Property       | Description                                                         | Type           | Default | isRequired |
| -------------- | ------------------------------------------------------------------- | -------------- | ------- | ---------- |
| classNameSider | React className property                                            | string         | ''      | false      |
| styleSider     | React style property                                                | object         | {}      | false      |
| widthSider     | Antd Sider component width, by the screenWidth change to set value. | string\|number | '320px' | false      |
| collapsedWidth | Antd Sider component prop collapsed is true, sider's width.         | number         | 80      | false      |

### siderMenus

Menu operation data. Type object. isRequired. We can update using onChangeSiderMenus.

| Property     | Description                                                              | Type  | Default | isRequired |
| ------------ | ------------------------------------------------------------------------ | ----- | ------- | ---------- |
| menus        | Data for rendering menu options. [menus](#menus)                         | array | []      | true       |
| collapsed    | Whether to shrink the antd sider component.                              | bool  | false   | true       |
| key          | Antd menu component prop selectedKeys, the currently selected menu item. | array | []      | true       |
| keyPath      | Antd menu component prop openKeys, The current menu item expanded.       | array | []      | true       |
| cacheKeyPath | Solve problems with caching keyPath. Type array.                         | array | []      | true       |
| breadRouters | Back to top selected all parents (contain: selected menu item).          | array | []      | true       |

#### <h4 id='menus'>menus</h4>

```javascript
menus = [
  {
    name: '开始', // show real name OR umi-plugin-local key
    router: '/start', // Uniquely identifies. Also location pathname exact match.
    icon: Setting, // Unselected Svg Component. Only first level has icon
    selectIcon: SettingSelect // Selected Svg Component. Only first level has icon
  },
  {
    name: 'MANAGEMENT',
    router: '/management',
    icon: Setting,
    selectIcon: SettingSelect,
    children: [
      // submenu show router item
      {
        name: 'SETTING',
        router: '/management/setting', // Inheriting the previous layer of routing.
        children: [
          {
            name: 'SETTING',
            router: '/management/setting/rule'
          }
        ]
      }
    ]
  }
]
```

### onChangeSiderMenus

Type function(siderMenusValues), isRequired. Update some of siderMenus object states.

### firstLevelSubMenuIconStyle

Type object, Default {}. The first level has a submenu icon.

| Property  | Description              | Type   | Default | isRequired |
| --------- | ------------------------ | ------ | ------- | ---------- |
| className | React className property | string | ''      | false      |
| style     | React style property     | object | {}      | false      |

### firstLevelMenuItemIconStyle

Type object, Default {}. The first level does not have a sub-menu icon.

| Property  | Description              | Type   | Default | isRequired |
| --------- | ------------------------ | ------ | ------- | ---------- |
| className | React className property | string | ''      | false      |
| style     | React style property     | object | {}      | false      |

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
