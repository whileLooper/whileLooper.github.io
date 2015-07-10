---
layout: post
title: Unity3D Error Handling
date: 2015-05-15 16:43:30.000000000 -04:00
categories: work
tags: error, unity3d
---
----------------
Q: 'XX' AnimationEvent 'NewEvent' has no receiver! Are you missing a component?

A: Go check the model in the asset, and looking for an animation event called 'New Event' in the event area, and delete it.

----------------

Q: AnimationEvent has no function name specified!

A: Answer can be find [@here](http://answers.unity3d.com/questions/582229/animationevent-has-no-function-name-specified-1.html),because there is some animation event not be named in your animation clip

-----------------

Q: Why my model cannot move in the Rain AI

A: Check which Rain Animator you use, Basic Animator or Mecanim Animator, it need to be same with your animator in the unity. Also check the behavior tree and parameter value and the state machine in your animator.
