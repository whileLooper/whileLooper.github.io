---
layout: post
title: DataTable Plugin for jQuery
date: 2016-01-21 15:15
summary: A DataTable plugin using experience for my currently working project
categories: work
---

 
# DataTable   
DataTable is a plugin my team have been using for the Project Dashboard.

It is a table plugin for jQuery JavaScript library, highly flexible tool, advanced interaction controls...

# Data Source types
- Array : [ ]
- Objects : {}
- Instance : new class()

# Data Source
- DOM(i.e. plain HTML of the document)
- JavaScript
- AJAX

# Features
- Sorting each column
- Pagination (with length changing feature)
- Scrolling
- Filtering
- Searching
- Editing
- Events handling
- Cell detail

Base on the functionally of DataTable, it is a very powerful plugin for table display...

# Customize
DataTable is highly customizable, with different initialisation, you can have different layout or function with your table. 

[Features able/disable](https://datatables.net/examples/basic_init/filter_only.html):

```javascript
$(document).ready(function() {
    $('#example').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false
    } );
} );
```

Disable *show entries* option:

```javascript
$(document).ready(function() {
    var t = $('#example').DataTable();
    $('#legacy-table_length').empty();
});
```

Add different buttons instead of *show entries*:

```javascript
    var addBtn = $('<button>add</button>');
    var editBtn = $('<button>edit</button>');
    var deleteBtn = $('<button>delete</button>');

    $('#legacy-table_length').append(addBtn);
    $('#legacy-table_length').append(editBtn);
    $('#legacy-table_length').append(deleteBtn);
```

Users have so many ways to adjust the detail in the data table.

# Add/Delete (countinue)



    

