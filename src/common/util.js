import dict from './dict'

export function searchDict(value, name) {
  if (arguments.length === 1) return dict[value].options || [] //  如果参数只有一个，获取对应的arr
  const arr = typeof name === 'string' ? dict[name].options || [] : name
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === value) {
      result = arr[i].label
      break
    }
  }
  return result
}
