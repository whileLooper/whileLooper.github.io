---
title: 定好目录结构
date: 2019-02-06
layout: post
tags: 
author: Bo Chen
---

偶尔需要自己从零开始搭建project，一个好的目录结构觉得了一个项目的可维护性和可拓展性

一个好的目录结构对一个好的项目而言是非常必要的。

一个好的目录结构应当具有以下的一些特点：

1、解耦：代码尽量去耦合，这样代码逻辑清晰，也容易扩展

2、分块：按照功能对代码进行分块、分组，并能快捷的添加分块、分组

3、编辑器友好：需要更新功能时，可以很快的定位到相关文件，并且这些文件应该是很靠近的，而不至于到处找文件

比较推荐的目录结构：

**多页面应用**

```
|-- src/ 源代码目录
    |-- page1/ page1 页面的工作空间（与这个页面相关的文件都放在这个目录下）
        |-- index.html html 入口文件
        |-- index.js js 入口文件
        |-- index.(css|less|scss) 样式入口文件
        |-- html/ html 片段目录
        |-- (css|less|scss)/ 样式文件目录
        |-- mock/ 本地 json 数据模拟
        |-- images/ 图片文件目录
        |-- components/ 组件目录（如果基于 react, vue 等组件化框架）
        |-- ...
    |-- sub-dir/ 子目录
        |-- page2/ page2 页面的工作空间（内部结构参考 page1）
          |-- ...
    |-- ...
|-- html/ 公共 html 片段
|-- less/ 公共 less 目录
|-- components/ 公共组件目录
|-- images/ 公共图片目录
|-- mock/ 公共 api-mock 文件目录
|-- ...
```

**单页面应用**

```
|-- src/ 源代码目录
    |-- page1/ page1 页面的工作空间
        |-- index.js 入口文件
        |-- services/ service 目录
        |-- models/ model 目录
        |-- mock/ 本地 json 数据模拟
        |-- images/ 图片文件目录
        |-- components/ 组件目录（如果基于 react, vue 等组件化框架）
        |-- ...
    |-- module1/ 子目录
        |-- page2/ page2 页面的工作空间（内部结构参考 page1）
    |-- ...
|-- images/ 公共图片目录
|-- mock/ 公共 api-mock 文件目录
|-- components/ 公共组件目录   
|-- ... 
```

参考：

- [目录结构优化](https://segmentfault.com/a/1190000015816534)