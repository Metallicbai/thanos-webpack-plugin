# thanos-webpack-plugin
`webpack` 灭霸插件，随机删除打包后一半文件


### 安装
```
npm i -D thanos-webpack-plugin
```

### 使用
```javascript
const thanosWebpackPlugin = require('thanos-webpack-plugin');

...

plugins: [
  new thanosWebpackPlugin()
]
```
