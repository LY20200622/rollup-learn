'use strict';

var dep = require('./dep-5559a227.js');

// 代码分割场景2：多入口文件。这些入口共享一些依赖。


function Main2() {
  console.log("This is Main_2 JS Module");
  dep.Dep();
}

Main2();

module.exports = Main2;
