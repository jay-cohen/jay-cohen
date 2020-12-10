---
layout: post
title: 10 tips for developers
permalink: /blog/10-Enterprise-mobile-development-tips
author: Jay Cohen
tags: iOS, Enterprise, Swift
description: Before starting the project it’s important to know where to start (ancient proverb). Group dependent parts of your apps functionality and create tickets for each section.
---

## 1. Organise the project
Before starting the project it’s important to know where to start. Group dependent parts of your apps functionality and create tickets for each section. Tickets are what’s used in software building to associate a task to an individual or team, [if you don’t know](https://www.atlassian.com/agile/project-management/epics-stories-themes){:target="_blank"} 😉. This approach makes it easier to set internal deadlines for pre release builds that become ready for team testing, even if that team is you. You could also setup GIT flow to handle release organisation or create them manually from you master branch.

![plan your projects]({{site.url}}/assets/blog/2019/organise-planet.jpeg){:class="img-med-center"}

## 2. Files and structure
An organised project should have organised codebase, right? Place groupings of files into folders with meaningful names, name your files correctly and follow platform guidelines. When the project contains 50+ files having a clean nested structure will be invaluable.

## 3. Localise from the start
If you don’t think your app needs to be in another language you need to localise it. The app may pivot further in its lifecycle and be required to be in 11 other languages under an expansion plan. Mobile development is still reliant on baking strings into files and this creates a pain point when changing values later. Localising the project now will save you time make adding new languages easy, trust me!

## 4. API data
Most enterprise apps tend to have a Content Management System to handle content messages for text labels, buttons etc. This content is requested and stored on first launch allowing the company to change the text without App Store submission. When requesting an endpoint however generic responses such as errors are still sent in string format, decoupling them from the initial CMS content request. Using a format similar to below eliminates this issue and ultimately gives you a bandwidth save.

{% highlight json %}
{
  "error": true,
  "code": 24 // References a string value within content request
}
{% endhighlight %}
There are other easy wins such as minimising your API’s functionality, this includes interogation of data (outside the remit of search and Oauth), passing full user objects back to update specific values, client side querying etc.

## 5. Realm data storage
Native database stores are a great way to handle persisted data across both major platforms. Interrogating data however on particular platforms is cumbersome without writing unecessary code. [Realm](https://realm.io/){:target="_blank"} provides a way to handle your data storage both locally and within the cloud. There’s a studio app that UI testers can use for monitoring of data locally, especially app update migrations. There’s also [SQLite](https://www.sqlite.org/index.html){:target="_blank"} for any old schoolers out there, but given the simplicity of Realm or native functionality you should be avoiding it.

## 6. One design pattern
A big issue when facing software development at scale using a team is conforming to a single design pattern. Developers tend to have their own preference over what’s the best approach for the project. MVC, MVVM, RxSwift are all great but there needs to be a concensus among the build teams. Include a README.md file that states this point and I would reject pull requests that don’t follow it. I can’t stress how important a concern this should be when starting the build or performing a rewrite. Cocoapods and libraries excluded.

![have a single design pattern]({{site.url}}/assets/blog/2019/code-smell.jpeg){:class="img-med-center"}

## 7. Test your features
I’ve worked with developers who only unit test and developers who only device test. Whilst there’s no silver bullet to solve testing you really need to get your hands dirty. Interrogate the hell out of your code, don’t just code for your exact case and expect it to work 100/100.

> Example: If your feature includes location based services around geofences, actually go out with your laptop and test on a device.

No developer/entrepreneur should consider themselves the messiah of brackets, they will be humbled. Applications shouldn’t be in a position to crash and receive ⭐️ star reviews due to a lack of proper testing. In my opinion a seriously bad developer is one who doesn’t test, no matter how quick or awesome they think they are! TESTING IS NEEDED!

![test properly]({{site.url}}/assets/blog/2019/test-production.jpeg){:class="img-med-center"}

## 8. Have a developer blog
Developers occasionally like to know what other developers are doing and it’s important to keep the troops motivated. This can be an internal blog or something non brand affiliated. By having a place that developers can contribute to will speak volumes about your team and help facilitate future recruitment.

Solo developers/entrepreneurs should also have a place to write their experiences down, medium for example.

## 9. Secure it!
Security should be a major concern for any enterprise app who communicates data via a network. If you spent months building a product you intended to make a viable business out of wouldn’t you protect it the best way possible? An example of bad practice:

I previously consulted at a company who were storing user credentials inside UserDefaults (A local storage mechanism for unsecure data in iOS) whilst also transmitting the same user data over HTTP. I quickly told them to change it!
It’s 2019 folks, use HTTPS and pin your certificate’s public key to the device, or even the certificate! For more information on security techniques please check out the following links:
* [SSL pinning on iOS](https://infinum.co/the-capsized-eight/ssl-pinning-revisited){:target="_blank"}
* [SSL pinning on Android](https://developer.android.com/training/articles/security-ssl.html){:target="_blank"}

## 10. Review
Finally, take the time to review your code and look for repetition you can omit. If you’re at the MVP stage ensure you’re code doesn’t have any memory leaks or open holes leading your application to crash. You need to be 100% confident in the code you’ve implemented otherwise you shouldn’t release it. Even if you’re constrained by time.

## Summary
Mobile development is an ever changing entity and by utilising some or all of the techniques above your app should be in a better position to handle users at scale. Keep security concerns at the forefront of development and remember to test features for failing cases as much as the positives. People tend to read reviews before they download apps and if you’re full of ⭐️ star reviews, your business will fail.
