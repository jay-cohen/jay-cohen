---
layout: post
title: Using Push Notifications to Update Apps
permalink: /blog/how-to-update-apps-using-push-notifications
author: Jay Cohen
tags: iOS, Xcode, Swift, Push Notifications, App Delegate
description: Push Notifications provide a great way to notify users and to update app content. Today we’re going to learn how to implement Push Notifications using the API to replace menu content for a fictional cookie takeaway.
---

Push Notifications provide a great way to notify users and to update app content. Today we’re going to learn how to implement Push Notifications using the API to replace menu content for a fictional cookie takeaway.

#### What we’re going to do
1. Setup the app to receive push notifications
2. Add the correct methods
3. Perform a network request
4. Challenge the data response
5. Call an internal method to update our cookie menu

## Getting started
If you haven’t already done so you will need to grant the background notification capability in your project. You can do this by heading over to your *app target->Signing & Capabilities->Background Modes* and checking **Remote notifications**. Once that is done head over to your AppDelegate.swift file and add the following code below appLaunch.

{% highlight swift %}
func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    // Forward notification token to your server
}

func application(_ application: UIApplication,didFailToRegisterForRemoteNotificationsWithError error: Error) {
    // Handle your error case for non registration
}

func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: 	Any],fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    // We will be using this method today
}
{% endhighlight %}
What these methods provide is everything needed to receive a push notification from an external resource such as your own server setup or Firebase. For this example were only going to focus on receiving a push notification and to have the app perform a network request. Usually the **userInfo** dictionary would contain all your content and you’d process it. Next inside the **didReceiveRemoteNotification** method above add in the following code.

{% highlight swift %}
guard let url = URL(string: "www.scrumptiouscookies.com/todays-specials") else {
    completionHandler(.failed)
    return
}
{% endhighlight %}
This code checks the url else throws the **completionHandler(.failed)**. The reason we check the url before continuing is most of the times the url will be inside a preference file or passed down via the push notification **userInfo** dictionary.

Now comes the main body of the method which will perform the URL request. For this example the request is mapped internally but you may want to handle this outside. Note, Push Notifications have a time limit of execution which is dependant on what the phone is already doing in the background. Add in the following to the method body, just after the URL check.

{% highlight swift %}
let session = URLSession.shared.dataTask(with: url) { (data: Data?, response: URLResponse?, error: Error?) in
    if let error = error {
        print("[Error]: fetching menu from server! \(error.localizedDescription)")
        completionHandler(.failed)
        return
    }
    guard response != nil else {
        print("[Error]: No response found fetching menu from the server")
        completionHandler(.noData)
        return
    }
    guard let data = data else {
        print("[Error]: No data found fetching menu from the server")
        completionHandler(.noData)
        return
    }

    self.updateMenu(withData: data)
        completionHandler(.newData)
    }

    session.resume()
{% endhighlight %}
As you can see from the code above we check for errors first. Checking for errors first is the best approach for many reasons including performance on your device. This approach minimises any processing an app may have to do and allows quick dismissal of a background activity. For example, if in this case we tried to call **self.updateMenu(withData: data)** without checking for the existence of data or that we have errors our app will try to **updateMenu()**. This could include writes to the database or to an internal file, both of which carry a performance and memory count. 

All that’s left to do now is to create the **updateMenu()** method that will perform your internal write to the database or file etc.

## Full Code
{% highlight swift %}
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: 	Any],fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    guard let url = URL(string: "www.scrumptiouscookies.com/todays-specials") else {
        completionHandler(.failed)
        return
    }

    let session = URLSession.shared.dataTask(with: url) { (data: Data?, response: URLResponse?, error: Error?) in
    if let error = error {
        print("[Error]: fetching menu from server! \(error.localizedDescription)")
        completionHandler(.failed)
        return
    }
    guard response != nil else {
        print("[Error]: No response found fetching menu from the server")
        completionHandler(.noData)
        return
    }
    guard let data = data else {
        print("[Error]: No data found fetching menu from the server")
        completionHandler(.noData)
        return
    }

    self.updateMenu(withData: data)
        completionHandler(.newData)
    }

    session.resume()

}

func updateMenu(withData data: Data) {
    // Update our cookies menu here
}

{% endhighlight %}

### Conclusion
Using Push Notifications to update app content in the background or to notify users of new content is a great way to increse engagement and keep your app content fresh. Feel free to reach out on [Twitter](https://twitter.com/AppDeveloperJay) if you have any questions relating to this post. Thanks for reading.