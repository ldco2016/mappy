import { rawData } from "./csvFileReader";

export class Designation {
  General_Plan_Designation: string;
  Latitude: number;
  Longitude: number;

  static DELIMITER = ",";

  constructor(rawRow: string) {
    const data = rawRow.split(Designation.DELIMITER);

    // this.Address = data[0];
    this.General_Plan_Designation = data[1];
    this.Latitude = parseFloat(data[2]);
    this.Longitude = parseFloat(data[3]);
  }

  markerContent(): string {
    return `<h3>Planned Designation: ${this.General_Plan_Designation}</h3>`;
  }
}

const ROW_DELIMITER = "\r\n";

const data: Designation[] = [];

for (const rawRow of rawData.split(ROW_DELIMITER)) {
  data.push(new Designation(rawRow));
}

// console.log(data);
