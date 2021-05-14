import { rawData } from "./csvFileReader";
import { Address } from "./Address";
// import { Designation } from "./Designation";
// import { Data, rawData } from "./Data";
// import { readFileSync } from "fs";
import { CustomMap } from "./CustomMap";

const ROW_DELIMITER = "\r\n";

const data: Address[] = [];

// for (const rawRow of rawData.split(ROW_DELIMITER)) {
//   data.push(new Address(rawRow));
// }

console.log(rawData);
// console.log(data);

const address = new Address(rawData);

// const customMap = new CustomMap("map");

// customMap.addAddressMarker(address);

// import { readFileSync } from "fs";
// import { Data } from "./Data";

// const ROW_DELIMITER = "\r\n";

// const rawData = readFileSync("src/Cales_trim_down.csv", {
//   encoding: "utf-8",
// });

// const data: Data[] = [];

// for (const rawRow of rawData.split(ROW_DELIMITER)) {
//   data.push(new Data(rawRow));
// }

// console.log(data);
