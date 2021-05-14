import { readFileSync } from "fs";

export class Data {
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
}

const ROW_DELIMITER = "\r\n";

export const rawData = readFileSync("src/Cales_trim_down.csv", {
  encoding: "utf-8",
});

const data: Data[] = [];

for (const rawRow of rawData.split(ROW_DELIMITER)) {
  data.push(new Data(rawRow));
}

// console.log(data);
