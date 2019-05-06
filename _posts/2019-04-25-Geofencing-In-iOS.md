---
layout: post
title: Geofencing in iOS
permalink: /blog/geofencing-in-ios
author: "Jay Cohen"
tags: iOS, location
---

When previously working for a client I had the chance to create a proof of concept (POC) that enabled uses to be notified via Apple's Push Notification Service or third party tool when entering a chosen boundry. Once entered into a specific boundry a user would be shown information to interogate alowing with targeted advertising.

## Inital problems
The main issue faced was around accuracy. iPhones are currently accurate to a radius of 10-15m and uses on average 2 cell tower GPS locations to provide the coordinates that pin point the device. While it isn't true GPS it's still an accurate way to determine a users location. The second issue would be the drawing of these boundries inconjunction with receiving notifications (performance issue). Having gone through various scenarios the solution to store and cache data once a user had entered a location seemed the best of the bunch. Under this solution the server and the device interaction would be small (push notification size) and keep costs low at server level.  


## Solution

Having advised on how the back end services would handle the transferring of data between entites the POC was created. The POC was delivered ahead of schedule and testing began. Both myself and the client visited various locations throughout the UK and with the back end guys on speakerphone we tested Guerrilla style. Under testing we found an issue relating to device notification queuing and removal, but that was an easy fix. If that's one takeaway from this article is that you should test your applications under the scenario that it would be used in, don't just rely on the simulator.


### Summary

Overall the project was a success and the POC proved a viable MVP for the client to attract investors. The client managed to secure funding and the application was built by a small team I helped create. Whilst the bulk of the code is propietory and bound by an NDA what I can share is the Swift 3 code example below. This is how to draw a boundry around a set of coordinates pulled from Core data, It looks like a small chunk but under a MVCS pattern each "Bulk" workload is farmed off to the service class it represents i.e. UserService, CoreDataService. This keeps controllers clean to "Control" and decouples logic allowing for separation of concerns.


{% highlight swift %}
var fences: [Fence] = [
  // Array of example fences pulled from data store, radius value in miles
  Fence(title: "Fence 1", coordinate: [48.5074, 10.1278], radius: 1.0),
  Fence(title: "Fence 2", coordinate: [48.5074, 10.1278], radius: 1.0),
]

func createRegions() {
  // Check if can monitor regions
  if CLLocationManager.isMonitoringAvailable(for: CLCircularRegion.self) {

    // Clear any existing regions
    for monitored in locationManager.monitoredRegions {
      locationManager.stopMonitoring(for: monitored)
    }

    // Loop through fences array and define regions for a MKMapView object
    for fence in fences {    
      let coordinate  = CLLocationCoordinate2DMake(fence.coordinate[0], fence.coordinate[1])
      let region      = CLCircularRegion(center: CLLocationCoordinate2D(latitude: coordinate.latitude, longitude: coordinate.longitude), radius: fence.radius, identifier: fence.title)
      region.notifyOnEntry = true
      region.notifyOnExit  = true
      locationManager.startMonitoring(for: region)
      let circle = MKCircle(center: coordinate, radius: fence.radius)
      mapView.add(circle)     
    }

  } else {
    print("[APP]: Unable to track user regions")
  }
}

func mapView(_ mapView: MKMapView, rendererFor overlay: MKOverlay) -> MKOverlayRenderer {
  let circleRenderer = MKCircleRenderer(overlay: overlay)
  circleRenderer.strokeColor = .blue
  circleRenderer.fillColor   = .orange
  circleRenderer.lineWidth   = 1.0
  return circleRenderer
}
{% endhighlight %}

*I plan to release an article in future on how I manage file structures in iOS.*

<!-- <section class="download-box">
  <h3>Download the full Xcode project</h3>
</section> -->
