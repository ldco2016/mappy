// Instructions to every other class
// on how they can be an argument to
// 'addMarker', even though right now

import { Data } from "./Data";

// there is only one 'Data' class
export interface Mappable {
  Latitude: number;
  Longitude: number;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 13,
      center: {
        lat: 37.804363,
        lng: -122.271111,
      },
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#333333",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
      ],
    });
  }

  // addMarker(mappable: Mappable): void {
  //   const marker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.Latitude,
  //       lng: mappable.Longitude,
  //     },
  //   });

  //   marker.addListener("click", () => {
  //     const infoWindow = new google.maps.InfoWindow({
  //       content: mappable.markerContent(),
  //     });

  //     infoWindow.open(this.googleMap, marker);
  //   });
  // }

  // for (const city in Data) {

  // }

  addCircleMarker(mappable: Mappable): void {
    const circleMarker = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 1,
      map: this.googleMap,
      clickable: true,
      center: {
        lat: mappable.Latitude,
        lng: mappable.Longitude,
      },
      radius: 120,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    google.maps.event.addListener(circleMarker, "click", () => {
      infoWindow.setPosition(circleMarker.getCenter());

      infoWindow.open(this.googleMap);
    });

    // circleMarker.addListener("click", () => {
    //   const infoWindow = new google.maps.InfoWindow({
    //     content: mappable.markerContent(),
    //   });

    //   infoWindow.open(this.googleMap, circleMarker);
    // });
  }
}
