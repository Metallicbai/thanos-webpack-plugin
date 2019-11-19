module.exports = class Thanos {
  constructor (compiler, options = {}) {
    this.compiler = compiler;
    this.options = options;
  }
  run() {
    this.compiler.hooks.emit.tap('thanos', compilation => {
      const keyArr = Object.keys(compilation.assets);
      const l = keyArr.length;
      let len = Math.floor(l / 2);
      const delArr = [];
      while (len > 0) {
        const random = Math.floor(Math.random() * l);
        const key = keyArr[random];
        if (!delArr.includes(key)) {
          delArr.push(key);
          len--;
          delete compilation.assets[key];
        }
      }
    })
  }
}