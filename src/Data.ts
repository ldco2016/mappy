import { rawData } from "./csvFileReader";
import { Mappable } from "./CustomMap";

export class Data implements Mappable {
  Address: string;
  General_Plan_Designation: string;
  Latitude: number;
  Longitude: number;

  static DELIMITER = ",";

  constructor(rawRow: string) {
    const data = rawRow.split(Data.DELIMITER);

    this.Address = data[0];
    this.General_Plan_Designation = data[1];
    this.Latitude = parseFloat(data[2]);
    this.Longitude = parseFloat(data[3]);
  }

  markerContent(): string {
    return `
    <div>
      <h1>Address: ${this.Address}</h1>
      <h2>Density: ${this.General_Plan_Designation}</h2>
    </div>
    `;
  }
}

const ROW_DELIMITER = "\r\n";

const data: Data[] = [];

for (const rawRow of rawData.split(ROW_DELIMITER)) {
  data.push(new Data(rawRow));
}
