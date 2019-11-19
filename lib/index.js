const Thanos = require('./thanos');
module.exports = class {
  apply(compiler) {
    const thanos = new Thanos(compiler);
    thanos.run();
  }
}