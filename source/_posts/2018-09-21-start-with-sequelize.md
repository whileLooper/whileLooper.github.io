---
title: Start with Sequelize
layout: post
date:   2018-09-21
tags: 
  - JavaScript
  - learning
  - Sequelize
  - Database
author: "Bo Chen"
---

## Ticket: create a new model, and associate to another modal

### Create Model
For example, this ticket detail is creating a new model, contains information about some specific url.

From Sequelize official documentation, Models are defined with `sequelize.define('name', {attributes}, {options})`.

```js
    const LinkDetail = sequelize.define('link_detail', {
        url: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    })
```

and for future repeat use, wrap it with `module.exports`: 

```js
module.exports = (sequelize, DataTypes) => {
    const LinkDetail = sequelize.define('link_detail', {
        url: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return LinkDetail;
}
```

<!-- more --> 

### Associations
So far, at this point, half of ticket is done, get into Associations, in this ticket, this link model is associated to another model which is called **story** model, and they are **One-To-One associations**.

    One-To-One associations are associations between exactly two models connected by a single foreign key.

**BelongsTo**

`BelongsTo` associations are associations where the foreign key for the one-to-one relation exists on the source model.

**HasOne**

`HasOne` associations are associations where the foreign key for the one-to-one relation exists on the target model.

### Difference between HasOne and BelongsTo

Read the official documentation, they have a greate example! [click here](http://docs.sequelizejs.com/manual/tutorial/associations.html#one-to-one-associations)

After comparing the differences between `belongsTo` and `hasOne`, in this case we should use `hasOne`:

`LinkDetail.hasOne(Story)`, add `storyId` attribute to target model which is `Story` model.

### Add association to model define function

```js
module.exports = (sequelize, DataTypes) => {
    const LinkDetail = sequelize.define('link_detail', {
        url: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    LinkDetail.associations = () => {
        LinkDetail.hasOne(Story);
    };

    return LinkDetail;
}
```

### In the end

Of cause, in my real ticket, its not this easy, there are more detail about model structure, more attributes and more associations between others. Need to spend time to read through the documentation, it is always my best friend, when I start something new.

Once again, **read the documentation**! IT'S FREE!!!

