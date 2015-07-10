---
layout: post
title: Basic Unity Rain AI with Mecanim Animator
date: 2015-07-09 21:48:22
summary: A tutorial to set up a basic enemy patrol ai in the unity by using Rain Ai and Unity Mechanim animator
categories: project
tag: Unity, Rain AI
---



It is a part of our game design team work, my work is creating a proper enemy object in our game, the enemy should have basic animations and the basic patrol AI in the game. This tutorial is showing how to implement [@Rain AI](http://rivaltheory.com/rain/) (a free unity pulgin) to my enemy character, then the enemy will be able to show walking animation along the waypoint route.

<iframe width="420" height="315" src="https://www.youtube.com/embed/2ZbQ9CPP5X8" frameborder="0" allowfullscreen></iframe>

* ### Install the Rain Puglin 

* ### Set up the basic and place the model
    - Create a simple plane, and drag your model on the plane, setting up the properly contrains of model.
    - Remember to set your model rig animation type *correctly* (I use humanoid)!!! 

* ### Set up the model and animations
    - Create an enemy animator controller.
    - Inside the animator controller, set up your animation states. For example, I only set up idel, walking and running state in my controller. I use blend tree to control walking and running state with *speed* and *direction* parameters.
    - Assign correspondding data and animations into the blend tree.
    - Testing animation funcitonal.

* ### Create an AI object and waypoints in the environment
    - Create a Rain AI object under the enemy object
    - Create a waypoint route from Rain AI (**Rain** -> **Create New** -> ##Waypoint Route##), customize your waypoint by adding the new waypoint from Rain AI insecptor, and name your waypoint route

* ### Modify the AI Rig
    - Inside the AI Rig inspector, dray the enemy into *body* field. 
    - In the *Animation* option, select *MecanimAnimator*
    - *Add Animation State*, select a state you want, in my case, I select the "LocalMotion" state which contains the enemy ideal, walking and running blend tree.
    - In the *Animation State* window, adding a start parameter, *speed*, give it a parameter value, which value can let the enemy perform the animation. 

* ###  Create an AI behavior tree
    - In *Mind* option, *open Behavior Editor* to create a new behavior tree
    - In the behavior tree editor, right click the behavior tree name to create a parallel root(**Create** -> **Decisions** -> **Parallel**)
    - Create a *Waypatrol* under the root(right click *root*, **Create** -> **Decisions** -> **Waypatrol**), put your waypoint route name in the *Waypoint Route* field, so that RAIN knows which route it gonna use. Assign a name to *Move Target Variable*, in my case is "NextPoint".
    - Create a *Move* action to *Waypatrol*, put name of *Move Target Variable* from last step.
    - Now back to *root*, create an animate action (**Create** -> **Decisions** -> **animate**), select the *Repeat* to "Forever". Assign a name to the *Animation State*
    - At the end, don't forget to assign your new behavior tree to *Mind*'s *Behavior Tree Asset*, some time people forget to do it and take a lot of time to fix it.
    
