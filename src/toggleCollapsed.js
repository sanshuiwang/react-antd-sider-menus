import { uniqArray } from './util'

export const toggleCollapsed = ({
  onChangeSiderMenus,
  collapsed,
  keyPath,
  cacheKeyPath,
  breadRouters
}) => {
  let obj = {
    collapsed: !collapsed,
    keyPath: [],
    cacheKeyPath: []
  }

  if (!collapsed) {
    // 关闭的时候缓存之前展开的节点
    obj['cacheKeyPath'] = keyPath
  } else {
    // 展开menus的sider时进行展开节点数据的恢复
    const newKeyPath = cacheKeyPath ? cacheKeyPath.concat(breadRouters) : cacheKeyPath
    obj['keyPath'] = uniqArray(newKeyPath)
  }

  onChangeSiderMenus({ ...obj })
}
