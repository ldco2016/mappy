import { rawData } from "./csvFileReader";

export class Address {
  Address: string;
  // General_Plan_Designation: string;
  Latitude: number;
  Longitude: number;

  static DELIMITER = ",";

  constructor(rawRow: string) {
    const data = rawRow.split(Address.DELIMITER);

    this.Address = data[0];
    // this.General_Plan_Designation = data[1];
    this.Latitude = parseFloat(data[2]);
    this.Longitude = parseFloat(data[3]);
  }
}

const ROW_DELIMITER = "\r\n";

const data: Address[] = [];

for (const rawRow of rawData.split(ROW_DELIMITER)) {
  data.push(new Address(rawRow));
}

// console.log(data);
