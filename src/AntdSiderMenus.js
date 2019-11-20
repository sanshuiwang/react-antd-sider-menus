import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'umi-plugin-locale'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import { childrenToFlat, findPathByLeafParam, uniqArray } from './util'
import { toggleCollapsed } from './toggleCollapsed'

const { Sider } = Layout
const { SubMenu } = Menu

const RenderSubMenuItem = ({ item }) => {
  if (item.children) {
    return (
      <SubMenu key={item.router} title={<FormattedMessage id={item.name} />}>
        {item.children.map(childrenItem => RenderSubMenuItem({ item: childrenItem }))}
      </SubMenu>
    )
  }

  return (
    <Menu.Item key={item.router}>
      <Link to={item.router}>
        <FormattedMessage id={item.name} />
      </Link>
    </Menu.Item>
  )
}
RenderSubMenuItem.propTypes = {
  item: PropTypes.object
}

const RenderMenuItem = ({ item, key, firstLevelSubMenuIconStyle, firstLevelMenuItemIconStyle }) => {
  if (item.children) {
    return (
      <SubMenu
        key={item.router}
        title={
          <React.Fragment>
            <Icon
              style={firstLevelSubMenuIconStyle.style}
              className={firstLevelSubMenuIconStyle.className}
              component={key[0].indexOf(item.router) !== -1 ? item.selectIcon : item.icon}
            />

            <FormattedMessage id={item.name} />
          </React.Fragment>
        }
      >
        {item.children.map(childrenItem => RenderSubMenuItem({ item: childrenItem }))}
      </SubMenu>
    )
  }
  return (
    <Menu.Item key={item.router}>
      <Link to={item.router}>
        <Icon
          className={firstLevelMenuItemIconStyle.className}
          style={firstLevelMenuItemIconStyle.style}
          component={key[0] === item.router ? item.selectIcon : item.icon}
        />
        <FormattedMessage id={item.name} />
      </Link>
    </Menu.Item>
  )
}
RenderMenuItem.propTypes = {
  item: PropTypes.object,
  key: PropTypes.array,
  firstLevelSubMenuIconStyle: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object
  }),
  firstLevelMenuItemIconStyle: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object
  })
}

function AntdSiderMenus(props) {
  const {
    screenWidth = 0,
    locationPathname = '',
    antdSider: { classNameSider = '', styleSider = {}, widthSider = '320px', collapsedWidth = 80 },
    siderMenus: {
      menus = [],
      collapsed = false,
      key = [],
      keyPath = [],
      cacheKeyPath = [],
      breadRouters = []
    },
    onChangeSiderMenus,
    firstLevelSubMenuIconStyle = {},
    firstLevelMenuItemIconStyle = {}
  } = props

  useEffect(() => {
    // 触发扁平menus的数组，设置locationPathname的父节点
    const flatMenus = childrenToFlat(menus)
    onChangeSiderMenus({
      flatMenus
    })
  }, [menus, onChangeSiderMenus])

  useEffect(() => {
    /**
     * 每次切换路由后，重新确定要选中的menus的item，以及要展开的节点(展开的节点包含之前展开的)
     * 1. 找到当前路由的所有父亲节点的路由
     * 2. 用当前父节点的router属性与之前展开的menus的节点合并
     * 3. 设置新的面包屑
     */
    const breadRoutersCompute = findPathByLeafParam(locationPathname, 'router', menus) || []
    const newKeyPath = keyPath.concat(breadRoutersCompute)

    if (collapsed) {
      /**
       * 4. 如果跳转路由的时候,左半栏是收起来状态。
       * 为了阻止折叠状态下子菜单自动展开到目标目录,进行模仿折叠菜单栏,缓存openKeys操作cacheKeyPath
       * */
      onChangeSiderMenus({
        breadRouters: breadRoutersCompute,
        key: [locationPathname]
      })

      toggleCollapsed({
        onChangeSiderMenus,
        collapsed: false,
        keyPath: uniqArray(newKeyPath),
        cacheKeyPath,
        breadRouters: breadRoutersCompute
      })

      return
    }

    onChangeSiderMenus({
      breadRouters: breadRoutersCompute,
      key: [locationPathname],
      keyPath: uniqArray(newKeyPath)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationPathname, menus, onChangeSiderMenus])

  useEffect(() => {
    /**
     * 展开左半栏状态，处理浏览器窗口小于等于1440时，将左半栏收起
     * */
    if (!collapsed && screenWidth <= 1440 && screenWidth !== 0) {
      toggleCollapsed({ onChangeSiderMenus, collapsed: false, keyPath, cacheKeyPath, breadRouters })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth])

  return (
    <Sider
      className={classNameSider}
      collapsible
      trigger={null}
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      width={widthSider}
      style={styleSider}
    >
      <Menu
        selectedKeys={key}
        openKeys={keyPath}
        mode="inline"
        onClick={item => {
          onChangeSiderMenus({ key: [item.key] })
        }}
        onOpenChange={sub => {
          onChangeSiderMenus({ keyPath: sub })
        }}
      >
        {menus.map(item =>
          RenderMenuItem({
            item: item,
            key,
            firstLevelSubMenuIconStyle,
            firstLevelMenuItemIconStyle
          })
        )}
      </Menu>
    </Sider>
  )
}

AntdSiderMenus.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  locationPathname: PropTypes.string.isRequired,
  antdSider: PropTypes.shape({
    classNameSider: PropTypes.any,
    styleSider: PropTypes.object,
    widthSider: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    collapsedWidth: PropTypes.number
  }),
  siderMenus: PropTypes.shape({
    menus: PropTypes.array,
    collapsed: PropTypes.bool,
    key: PropTypes.array,
    keyPath: PropTypes.array,
    cacheKeyPath: PropTypes.array,
    breadRouters: PropTypes.array
  }).isRequired,
  onChangeSiderMenus: PropTypes.func.isRequired,
  firstLevelSubMenuIconStyle: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object
  }),
  firstLevelMenuItemIconStyle: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.object
  })
}

export default AntdSiderMenus
