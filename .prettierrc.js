module.exports = {
  // 箭头函数是否带括号 *always: 带 | avoid: 不带
  arrowParens: 'always',
  // ">"放在最后一行的末尾还是单独放在下一行 *false: 单独 | true: 末尾
  bracketSameLine: false,
  // 对象文字中括号之间的空格 false: 不加空格 | *true: 加空格
  bracketSpacing: true,
  // 格式化HTML对空格的灵敏度 *"css" | "strict" | "ignore"
  htmlWhitespaceSensitivity: 'css',
  // 文件顶部插入@format标记
  insertPragma: false,
  // JSX中使用单引号而不是双引号 默认: false
  jsxSingleQuote: false,
  // 一行最多80个字符折行 默认: 80
  printWidth: 100,
  // 将按原样包装标记文本 "always"-超过宽度包装 | "never"- 不包装 | *"preserve" - 原样包装
  proseWrap: 'never',
  // 对象中的属性 *"as-needed" | "consistent" | "preserve"
  quoteProps: 'as-needed',
  // 仅限于格式化文件顶部包含特殊注释的文件
  requirePragma: false,
  // 语句末尾加分号
  semi: false,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 每个缩进级别的空格数
  tabWidth: 2,
  // 逗号分隔的句法结构中添加尾随逗号 "none" - 没有尾随逗号 | "all" - 尽可能跟踪逗号 | *"es5" - 在ES5中有效的尾随逗号（对象、数组等）
  trailingComma: 'none',
  // 用制表符而不是空格缩进行
  useTabs: false,
  // 是否缩进Vue文件中的代码 *false | true
  vueIndentScriptAndStyle: false,
  // // 结尾是 \n \r \n\r auto
  endOfLine: 'auto'
}
