---
title: 静态化与服务器渲染 （Static vs. Server Rendering)
date: 2018-12-20
layout: post
tags: 
  - 翻译
author: Bo Chen
---

  静态化渲染和服务器渲染二者都为你的APP页面进行HTML渲染， 然而他们之间有个巨大的差异。。。
  Static rendering and server rendering both involve rendering HTML for each of your app's pages- but there's one major difference between them...

也许你曾听过静态化渲染与服务器渲染，你也知道他们二者都可以提高SEO，让你的网站或者APP进行生成HTML页面。当然你也可以使用 [ReactDOMServer.renderToString()](https://reactjs.org/docs/react-dom-server.html#rendertostring)实现上述两种目的。

这么说，他们两者看上去是一种东西？对吧？他们几乎几乎差不多一样，接下来让我解释下。

# 热切的静态化渲染， 慵懒的服务器渲染

静态和服务器渲染都参与到了对HTML的生成， 不同点在于**静态化渲染只在编译的时候发生一次**，然而**服务器渲染则是按需发生**根据用户的每一次请求。

## 静态化渲染

当静态化渲染的时候，你需要在每次用户访问前就生成好一个单一的HTML文件。 接着你把这些生成好的文件都存放在云端服务中，比如亚马逊的S3，或者运行中的Nginx服务器。

![static rendering image](https://frontarm.com/static/media/static-rendering.ac5d510c.png)

静态化渲染的优势在于能够对服务器请求做到无脑的快速，因为在处理过程中不需要再去生成什么文件。 实际上, 由于你的网站的响应都是提前生成好的，那么你就可以存放文件在全世界任何角落的CDN。这样可以让你的网站打到一个不可思议的响应速度。但是这也是有代价的。

使用静态化渲染时，你需要给*每一个可能的请求*提前生成响应。 对于那些对高质量内容的网站来说，这样是没问题的——静态化渲染工具比如[Navi](https://frontarm.com/navi/)可以在仅仅几秒内生成上百个网页。但是如果你需要搭建一些无法预测所以用户请求的项目，比如一个搜索引擎？或者你有一堆用户生成内容，根据每一个请求来改变响应？这种情况的话，你需要的是服务器渲染。

## 服务器渲染

按React的说法，**服务器渲染**指的是按照每一个请求生成HTML的过程。通常，你在服务器上架设一些后端框架比如[express](https://expressjs.com/)或者[Next.js](https://nextjs.org/)，根据每个请求渲染你的React app， 就像更传统的PHP和Rails框架网站一样。

![server rendering image](https://frontarm.com/static/media/server-rendering.c64da2e3.png)

服务器渲染*总是*慢于静态内容的。然而，你还得为了让速度更快些捣鼓一堆东西，当然这样的延迟是否重要取决于你的商业需求。

当然， 服务器渲染的速度短板，成就了他的灵活性，它允许你：

- 响应*任何*用户发出的请求 —— 即使是你可能没预想过的
- 从数据库中抓取最新的内容，而不是过时的静态文件
- 对没授权的用户选择性的隐藏内容

# 那么我该选哪一个？

这个问题的 ~ 答案 ~ 当然是 ~~~ *看情况*

如果**静态**渲染可行的话（作者指对于你当前的需求），它是一个快速，低廉，简单的解决方案。但是，如果你的网站需要达到以下这些需求，你则需要**服务器**渲染：

- 如果你不能预测所有可能性的用户请求
- 如果响应内容需要根据不同用户进行改变
- 如果响应内容很快过时

请记住，**如果需要为每个页面提供特定的HTML用于SEO**，这些需求将仅使服务器渲染呈现成为必要的选择。举个例子，一个社交网络或者在线电商最好还是用服务器渲染来搭建。

另一方面来说，如果SEO无关紧要的话，例如，一个存在于登录屏幕后面的应用程序 - 然后您的应用程序只需要一个HTML文件。 在曾经，静态渲染可能是最好的选择。但是，最近静态和服务器渲染工具的改进大多缩小了简单性差距。

# 渲染工具

几年前当我开始用React来构建网站的时候，不管是静态还是动态，都很难。我甚至写了篇文章告诉你[别这么做](http://jamesknelson.com/universal-react-youre-doing-it-wrong/),但是近年来，改变了很多。

有越来越多基于React的工具来静态化渲染网站和APP，[Gatsby](https://www.gatsbyjs.org/)就是个很受欢迎，高强度的选择。对于一些更简单的东西，你可以选择[Navi](https://frontarm.com/navi/),一个跟Create-react-app一起使用的框架。

对于服务器渲染，有两种选择（作者只提到这两个），[Next.js](https://nextjs.org/learn/)和[Express](https://expressjs.com/),使用Next.js，您可以获得一个开箱即用的完整框架和托管解决方案——同时你的整个项目也绑定到Next.js。如果Next.js对你来说不是好的选择，你也可以试试比较传统化的Express。

# 鸡毛蒜皮的小事
最后，让我解释您正在阅读的网站（这里的网站指原文post的网站[frontarm.com](https://frontarm.com/articles/static-vs-server-rendering/)）如何运作。 Frontend Armory 是静态渲染的,每次内容更改时，都会使用Navi重新构建站点，然后将其推送到S3。 然后，当您发送请求时，它首先会检查与CloudFront在地理位置上接近您的缓存版本，然后再从S3请求它（如果失败）。

# 关于原文作者
原文是由 Frontend Armory的编辑**James K Nelson**发表在[Frontend Armory](https://frontarm.com/)上面的。

# 译者语
本篇文章，只是很基本的讲解了一下静态渲染和服务器渲染的一些基本特点和区别，适合入门新人，对两种渲染没有基本概念的读者。

由于近期对**Frontend Armory**这个网站的兴趣，发现上面有些不错的前端基本概念文章，所以想以此为长期学习的地方，通过翻译来提升自己，也帮助他人。
