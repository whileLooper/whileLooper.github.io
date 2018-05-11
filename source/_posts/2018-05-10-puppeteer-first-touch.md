---
title: Puppeteer First Touch
layout: post
date:   2018-05-10
tags: 
  - Puppeteer
  - headless
  - chrome
  - nodejs
author: "Bo Chen"
---
### What is Puppeteer

   > Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.

Well, according to the [Puppeteer](https://github.com/GoogleChrome/puppeteer) office Github documentation, It is a **library**, it provides **API** services, and it controls **Chrome**. It's maintained by Chrome DevTools team, only supported in Node v7.6 or greater version, and only works with Chrome or Chromium.

  > Manipulates Chrome like a puppeteer with your code.

<!-- more --> 


### Requirements / Environment

1. Node >= v7.6, Puppeteer requires `async/await`
2. Need latest `chrome driver`, it will be automatically downloaded when you install `puppeteer` from `npm`

   `npm install puppeteer --save`

### Quick Try Out

Puppeteer provides a [playground](https://try-puppeteer.appspot.com/) for a quick try out.

Taking a snapshot for my favirate clothing website:
```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();   // creating a browser instance
  const page = await browser.newPage();       // Use browser to create a new page obj
  await page.click('a > img[alt=Rb6bjbbjkyi]');  // using selector to click a img with specific item number
  await page.goto('http://www.supremenewyork.com/shop/new');  // take page obj to your link
  await page.screenshot({path: 'supreme.png'}); // take a screenshot and save to path

  await browser.close();  // don't forget to close your browser
})();
```

### Thoughts

The whole working process just like using a regular browser, open a web browser, enter a link, and go to the page, take a screenshot of the page, then close browser. Very easy to understand and use.

Base on the documentation, most of developers are using puppeteer as a testing tools for their projects, also it can be used to automating  and scraping the website, you know, writing a robot to auto copping limited clothes or sneakers...🔥





