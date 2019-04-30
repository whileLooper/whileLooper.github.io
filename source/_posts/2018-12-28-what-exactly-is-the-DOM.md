---
title: 到底什么是DOM
date: 2018-12-28
layout: post
tags:
  - JavaScript
  - DOM
  - 翻译
author: Bo Chen
---

[comment]: <> (是否真正读懂了那篇文章？)
[comment]: <> (是否真正的明白了原作者想表达出来的思想？)
[comment]: <> (这篇文章表达出来的观点是否正确？)
[comment]: <> (这篇文章表达出来的观点是否正确？)
[comment]: <> (如果不是，重新阅读文章（至少 3 ~ 5 遍）)

# 到底什么是DOM

**The Document Object Model**（文档对象模型）, 或者叫**DOM**，是网页的接口。它本质上是网页的API，允许程序读取和操作页面内容，结构和样式。接下来让我们进一步解析。

# 一个网页是如何构建的

一个浏览器如何从HTML源文档到视窗中展现样式和交互式页面的过程被称为“关键渲染路径（**Critical Rendering Path**）”,虽然这个过程可以被分解为多个步骤， 但是这些步骤大致可以分为两个阶段。第一个阶段涉及浏览器解析文档到最终确认渲染的内容，第二阶段则是浏览器执行渲染。

![render tree](https://bitsofco.de/content/images/2018/11/HTML-to-Render-Tree-to-Final.png)

第一阶段的结果被称之为“渲染树（render tree）”。HTML元素及其相关样式在页面上呈现出来的表达形式被称之为渲染树。为了构建树结构，浏览器需要两个东西：

1. **The CSSOM**, 与元素相关的样式表达（译者： 就是css文档）
2. **DOM**， 元素表达 （译者： 就是HTML文档）

# DOM如何被创造出来（看起来什么样）

DOM是源HTML文档基于对象的表现形式。它有些差异，但是它本质上是将HTML文档的结构和内容转化为可以被各种程序使用的一种对象模型。

DOM的对象结构表现为所谓的“节点树（node tree）”，它之所以被这么叫是因为它可以被看作一个单个父茎的树，其有着若干个分支，每个都可能有枝叶。在这种情况下，父“干”是根<html>元素，孩子“分支”是嵌套元素，而“叶”是元素中的内容。

来看看一下这个例子：

```html
<!doctype html>
<html lang="en">
 <head>
   <title>My first web page</title>
  </head>
 <body>
    <h1>Hello, world!</h1>
    <p>How are you?</p>
  </body>
</html>
```

以上文档的节点树表达形式：

![example 1 node tree](/images/example1_node_tree.png)

# DOM 不是什么

根据上述例子，DOM是源HTML文档的一对一映射。 但是，正如我所提到的，还是有差异的。 为了完全理解DOM是什么，我们需要看看它不是什么。

## DOM*不是*你的源代码

尽管DOM是从源HTML文档创建的，但它并不总是完全相同。 这里有两个实例展示了：DOM可以与源HTML不同。

### 1. 当HTML无效时

DOM是有效HTML文档的接口。在创建DOM的过程中，浏览器可能会矫正HTML中的无效代码。

例子：

```html
<!doctype html>
<html>
Hello, world!
</html>
```

上述文档中缺失`<head>`和`<body>`元素，对于有效HTML来说这是必需的。如果我们查看生成的DOM树，我们会发现这里被自动矫正了：

![example 2 node tree](/images/example2_node_tree.png)

### 2. 当JavaScript修改DOM时

DOM除了作为查看HTML文档内容的接口之外，还可以被修改，使其成为一个实时资源。

例如，我们可以使用JavaScript为DOM创建其他节点。

```js
var newParagraph = document.createElement("p");
var paragraphContent = document.createTextNode("I'm new!");
newParagraph.appendChild(paragraphContent);
document.body.appendChild(newParagraph);
```

这样就可以更新DOM， 但是当然并不是直接改变HTML文档

## DOM并不是你在浏览器里看到的那样（例如： 渲染树）

你在浏览器视窗中看到的渲染树，正如我所提到，它是DOM和CSSOM的结合，真正把DOM和渲染树区分开的是后者只包含最终将在屏幕上绘制的内容。

因为渲染树仅仅关注与渲染的内容本身，所以它会排除视觉上隐藏的元素。比如：具有`display: none`的元素。

```html
<!doctype html>
<html lang="en">
  <head></head>
  <body>
    <h1>Hello, world!</h1>
    <p style="display: none;">How are you?</p>
  </body>
</html>
```

在DOM里将包含`<p>`元素：

![example 3 node tree](/images/example3_node_tree.png)

但是，渲染树以及因此在视窗中看到的内容却不包含该元素。

![example 4 node tree](/images/example4_node_tree.png)

## 浏览器中的DOM*并不是*DOM

一点点小差异，因为DevTools元素检查器提供了最接近的DOM。但是，DevTools检查器包含里不在DOM中的其他信息。

最好的例子是CSS伪元素。Pseudo-elements created using the `::before` and `::after` selectors form part of the CSSOM and render tree, but are not technically part of the DOM.。因为DOM仅仅由源HTML文档构建，不包含应用于元素的样式。

尽管伪元素不是DOM的一部分，但他们仍然在我们的DevTools元素检查器中。

![element inspector](https://bitsofco.de/content/images/2018/11/Pseudo-element-in-devtools-inspector.png)

这就是为什么伪元素不能被JavaScript作为目标的原因，因为它们不是DOM的一部分。

# 总结

DOM是一个HTML文档的接口。它被浏览器用作确认在视窗中呈现内容的第一步，并通过Javascript程序来修改页面的内容，结构，样式。

虽然与其他形式的源HTML文档类似，但是DOM在许多方面还是有所不同：

- 有效HTML（It is always valid HTML）
- 可通过Javascript修改的实时模型（It is a living model that can be modified by JavaScript）
- 不包含伪元素（It doesn't include pseudo-elements）
- 包含隐藏元素（It does include hidden elements）

# 关于原文作者

原文是来自**Ire Aderinokun**发表在[bitsofco.de](https://bitsofco.de/what-exactly-is-the-dom/)上面的。

# 译者语

工作学习前端两年多，往往这些浅显，基础的知识最容易被忽略。**Ire Aderinokun**写里一系列DOM相关的文章，包括shadow DOM， Virtual DOM等等，我会争取总翻译出来。有时候我不会翻译，或者感觉原文效果更好的，我就直接把原文po出来。