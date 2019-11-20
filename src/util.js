/**
 * [childrenToFlat 通过递归操作每一层数组对数据拍平]
 * @author wangyang
 * @param  {array} data      要处理的数组
 * @return {array}           处理后的数组
 */
export const childrenToFlat = data => {
  if (Object.prototype.toString.call(data) !== '[object Array]') {
    return data
  }

  let arr = []
  for (let i = 0; i < data.length; i++) {
    const obj = { name: data[i]['name'], icon: data[i]['icon'], router: data[i]['router'] }

    arr = arr.concat(obj)

    if (data[i]['children']) {
      arr = arr.concat(childrenToFlat(data[i]['children']))
    }
  }

  return arr
}

/**
 * [findPathByLeafParam 通过子节点输出子节点以上的父节点(包括子节点)]
 * @author wangyang
 * @param {string/number}         leaf    查找的值
 * @param {string}                param   查找的值的key
 * @param {array: [object: {}]}   nodes   为原始Json数据
 * @param {undefined}             path    供递归使用，不要赋值
 * @return {array | undefined}                        处理后的数组
 */
export const findPathByLeafParam = (leaf, param, nodes, path) => {
  if (path === undefined) {
    path = []
  }
  for (var i = 0; i < nodes.length; i++) {
    var tmpPath = path.concat()
    tmpPath.push(nodes[i][param])
    if (leaf === nodes[i][param]) {
      return tmpPath
    }
    if (nodes[i].children) {
      var findResult = findPathByLeafParam(leaf, param, nodes[i].children, tmpPath)
      if (findResult) {
        return findResult
      }
    }
  }
}

export const isArray = obj => {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export const uniqArray = data => {
  if (!isArray(data)) {
    return data
  }

  let uniq = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (!uniq.includes(item)) {
      uniq.push(item)
    }
  }
  return uniq
}
