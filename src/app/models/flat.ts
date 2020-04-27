class Location {
  constructor(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  latitude: number;
  longitude: number;
}

export class Flat {
  constructor(name: string, description: string, full: boolean, maxPersons: number, longitude: number, latitude: number) {
    this.name = name;
    this.description = description;
    this.full = full;
    this.maxPersons = maxPersons;
    this.location = new Location(longitude, latitude);
  }

  _id: string;
  name: string;
  description: string;
  full: boolean;
  maxPersons: number;
  location: Location;
}
