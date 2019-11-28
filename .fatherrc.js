import react from 'react'
import commonjs from 'rollup-plugin-commonjs'

export default {
  esm: {
    type: 'rollup'
  },
  cjs: 'rollup',
  umd: {
    name: 'ReactAntdSiderMenus',
    globals: {
      react: 'React'
    }
  },
  cssModules: {
    generateScopedName: '[name]__[local]___[hash:base64:5]'
  },
  extraRollupPlugins: [
    commonjs({
      namedExports: { react: Object.keys(react) }
    })
  ],
  doc: {
    public: './public',
    base: '/react-antd-sider-menus/',
    title: 'ReactAntdSiderMenus',
    description:
      'Based on antd, menu props mode is inline. solve the problem of refreshing the route, jump routing, Layout.Sider collapsed from false to true, and when the collapsed is true, the dropdown is mistaken for the bug.'
  }
}
