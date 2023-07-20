// 使用 JSDoc 添加类型支持
// /**
//  * @type {import('rollup').RollupOptions}
//  */
// export default {
//   input: "src/main.js",
//   output: {
//     file: "dist/bundle.js",
//     format: "es",
//   },
// };

import { defineConfig } from "rollup";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser"; // 用于最小化的构建

// 通过 defineConfig 添加类型支持
export default defineConfig(
  // {
  //   input: "src/main.js",
  //   output: [
  //     // {
  //     //   // file: "dist/bundle.js",
  //     //   dir: "./dist", // 惰性动态导入-代码分割
  //     //   format: "cjs",
  //     // },
  //     {
  //       file: "dist/bundle.min.js",
  //       format: "iife", // 将代码封装，生成后的产物可以被 script 标签使用。同时隔离作用域。
  //       name: "version", // 使用全局变量 version 存储 main.js 导出的对象
  //       plugins: [terser()],
  //     },
  //   ],
  //   plugins: [json()],
  // },
  {
    // 多入口-代码分割。打包结果会将共同的依赖生成一个单独的块。
    input: ["src/main.js", "src/main_2.js"],
    output: [
      {
        dir: "./dist",
        format: "cjs",
      },
    ],
    plugins: [json()]
  }
);
