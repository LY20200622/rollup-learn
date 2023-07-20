'use strict';

var dep = require('./dep-5559a227.js');

function Main() {
  console.log("This is Main JS Module");
  dep.Dep();

  // 代码分割场景1：使用代码分割实现惰性动态加载。需修改 rollup 中的配置，rollup 会生成单独的块，此块仅在需要时进行加载。
  // import("./dep").then(({ default: Dep }) => {
  //   Dep();
  // });
}

Main();

module.exports = Main;
