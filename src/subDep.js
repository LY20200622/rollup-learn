// 直接导入 json 会在打包的时候报错，需使用插件：@rollup/plugin-json
// 这里还涉及到《除屑优化》，打包结果中，只会有 name，不会有 address
import { name } from "./JSON/mock.json";

export default function SubDep() {
  console.log("Ext JSON: ", name);

  return console.log("This Sub Dep");
}
