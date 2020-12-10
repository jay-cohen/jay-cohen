---
layout: post
title: 10 Xcode & Swift tips
permalink: /blog/10-Xcode-&-swift-tips-every-developer-must-know
author: Jay Cohen
tags: iOS, Xcode, Swift
description: Being an iOS developer for a number of years I’ve accumulated a bunch of Swift & Xcode tips to speed up the development process. The list below should be perfect for any IOS developer just starting out after a Udemy course or those looking to get the most out of wonderful Xcode.
---

Being an iOS developer for a number of years I’ve accumulated a bunch of Swift & Xcode tips to speed up the development process. The list below should be perfect for any IOS developer just starting out after a Udemy course or those looking to get the most out of wonderful Xcode.

> Looking for sounds for your app? Check out a new pack I’ve created with over 100 UI sounds for $7.  <a href="http://soundsuigood.com" title="Sounds UI Good" target="_blank">http://soundsuigood.com</a>

## Xcode & Swift tips
1. Constantly learn and challenge yourself. I hate to sound cliche on the first tip but this is incredibly important. iOS and Swift are an ever changing entity and you’ll need to keep up with what’s happening. I’ve included a list at the end of invaluable resources that will help in keeping you up to date.
2. Use SwiftLint in your projects. SwiftLint is a tool to enforce coding standards based on the Swift style guide. Using this pod will make you code in a standard fashion.
3. Name your methods and files correctly. Apple has a guide on how to name your methods. If you follow this correctly your code comments should be minimal.
4. Include a README.md file. Use this file to list any cocoapods, custom configurations to your app. It will save you time in the long run for you and other developers.
5. Organise your files into directories. I favour the Stanford university approach to keep things clean and accessible. (The second lecture)
6. **TEST, TEST, TEST**. Test driven development is a great way to ensure your code doesn’t break when you come to add features later. I use it for every project and have fallen foul when I haven’t. If you find test driven development hard to understand but want to implement something similar theres a great behaviour driven testing article written on Ray Wenderlich’s site.
7. Test UI actions and animations on a device. The simulator is great for proofing basic interactions but nothing beats actual device testing to check your UI animations.
8. Use an autoLayout library. There’s nothing wrong with using the standard API to layout constraints. These libraries exist to make it easier when it comes to animating or building complex layouts programmatically. Snapkit and Pure Layout are currently the most populat ones.
9. Quick open and assign to a window. Whilst the project navigator is a quick way to open files once you get in the “flow” you’ll end up wasting time searching through folders. Xcode has a handy “Quick open” feature that’s similar to Spotlight. To open a file press `cmd+shift+O` and a handy search box will appear. Click the Swift icon to the right to only search through .swift files. Once you have a file selected `option+shift+enter` to open the assign to a panel option.

![Xcode open quick]({{site.url}}/assets/blog/2019/xcode-open-quick.png){:class="img-med-center"}
![Xcode fast open]({{site.url}}/assets/blog/2019/xcode-fast-open.png){:class="img-med-center"}

10. Show build times inside Xcode — I only adopted this recently and it helps. Simply paste the line below into the Terminal and relaunch Xcode.
{% highlight swift %}
    defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool YES
{% endhighlight %}

![Xcode show build times]({{site.url}}/assets/blog/2019/xcode-run-speed.png){:class="img-med-center"}

### Great Xcode and Swift leaning resources.
I won’t delve into the reasons why you should have these on your radar, I’ll leave that for you to discover. All I can say is that besides forums and wwdc videos these places are great sources of information and will certainly level up your skillset to the pro leagues.

* [Apple documentation](https://developer.apple.com/documentation/){:target="_blank"}
* [Hacking with Swift](https://www.hackingwithswift.com/){:target="_blank"}
* [Ray Wenderlich](https://www.raywenderlich.com/){:target="_blank"}
* [Lets build that app](https://www.letsbuildthatapp.com/){:target="_blank"}