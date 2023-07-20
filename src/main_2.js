// 代码分割场景2：多入口文件。这些入口共享一些依赖。

import Dep from "./dep.js";

export default function Main2() {
  console.log("This is Main_2 JS Module");
  Dep();
}

Main2();
