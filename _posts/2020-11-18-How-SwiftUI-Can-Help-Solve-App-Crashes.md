---
layout: post
title: SwiftUI Can Help Stop Crashes
permalink: /blog/2020-11-18-How-SwiftUI-Can-Help-Solve-App-Crashes
author: Jay Cohen
description: Last month I was running through an old project to figure out how I solved a problem (4 years ago). Scouring through each storyboard I suddenly realised how complex the project was and also how simple this could be achieved today in SwiftUI.
---

Last month I was running through an old project to figure out how I solved a problem (4 years ago). Scouring through each storyboard I suddenly realised how complex the project was and how simple this could be achieved today in SwiftUI. To give an example the complexity of the project. One specific element required nested UICollectionView's 5 levels deep, which passed data back and forth up the stack to a HeaderView. It also resized dynamically just to add some extra juice.

Given that Storyboards in iOS have their quirks, what we have today in terms of SwiftUI make even the complex layouts easy to build. What I like about SwiftUI is that it's far easier to learn for newbies, instant preview of UI design, and that it appears (from my testing) to be easier to compile for Xcode. This reduce of build times means the work can be done much more quickly, making the cost cheaper to clients.

Currently SwiftUI is in 2.0 which brings the important <b>Lazy</b> back into the library, along with extra controls and components. I'm a big fan of lazy loading any element on screen as it seriously helps reduce stutters on your application when you've multiple components inside a ScrollView. A new modifier called **onChange**  which allows you to listen to **@State** changes and run any methods you need. This alone would have made the previous complex project mentioned above a doddle.

The main benefit I see to using SwiftUI is how it addresses most UI crashes is the combination of it's implementation and how it uses **@State** and **@observedObject**. Obviously if something is causing your application to pause or crash due to misallocation of memory or threading issues then SwiftUI won't help. A secondary benefit I also see is how it seamlessly merges with existing UIKit elements where you have complexity in your UI. For instance, any occurance where I need complete control of lists in a Pre & Post View layer I would still opt for a standard UI Component layer. **@State** and **@ObservedObject** can only get you so far. None of the projects I've worked on since have required this level of development, but I'm ready for it.