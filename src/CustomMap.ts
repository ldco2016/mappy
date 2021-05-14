import { Data } from "./Data";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addAddressMarker(address: Data): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: address.Latitude,
        lng: address.Longitude,
      },
    });
  }

  addDesignationMarker(designation: Data): void {}
}
