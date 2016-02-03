---
layout: post
title: Cookies vs localStorage
date: 2016-02-03 16:10
summary: Example of jQuery.cookies.js and HTML5 localStorage
categories: work
---



Recently I got a requirement from my team project: adding a modal to the index page, the modal once show up once when users visit the page.

When I first started to slove problem is by using [jQuery.cookies.js](https://github.com/carhartl/jquery-cookie):

```javascript
    $(window).load(function(){
    	// delete cookie in 1 day.
    	if ($.cookie('#myModal') == null) {
    		$.cookie('#myModal', 'loaded', { expires: 1 });
	    	$('#myModal').modal('show');	    	  		
    	}
	});
```

After I finished it by using jQuery.cookies, my teammates tell me that [HMTL5 localStorage](http://www.w3schools.com/html/html5_webstorage.asp) is a better choice for the requirement:

```javascript
    $(window).load(function(){
    	// check browser supports local storage or not
    	if (typeof(Storage) !== 'undefined') {
    		if (localStorage.getItem('isModalViewed') == null) {
    			// flag modal with loaded and show 
	    		localStorage.setItem('isModalViewed', 'viewed');
		    	$('#myModal').modal('show');	
    		} 	  		
    	} else {
    		console.log('not support web storage');
    	}
    });
```

jQuery.Cookies.js and HTML5 localStorage are both solved the problem, they are both client side storage solutions. localStorage and sessionStorage are both **webStorage** features of HTML5.

#### cookies
Simply cookies, which are supported by most browsers, stores less information, only string


#### localStorage 
Data stored using the localStorage object is persisted until it is specifically removed via JavaScript or the user clears the browser’s cache.

#### sessionStorage
The sessionStorage object stores data only for a session, after closing the browser's tab, data is gone, accessible only from the page that initially stored the data.

[stackoverflow:](http://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)    

    In terms of capabilities, cookies only allow you to store strings. The localStorage allow you to store JavaScript primitives but not Objects or Arrays (it is possible to JSON serialise them to store them using the APIs).
                                                                    

The reason checking browsers support before using local storage is localStorage and sessionStorage are relativley API(meaning not all legacy browsers will support them)