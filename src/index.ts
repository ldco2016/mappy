import { rawData } from "./csvFileReader";
import { Data } from "./Data";

import { CustomMap } from "./CustomMap";

const ROW_DELIMITER = "\r\n";

const data: Data[] = [];

for (const rawRow of rawData.split(ROW_DELIMITER)) {
  data.push(new Data(rawRow));
}

const customMap = new CustomMap("map");

data.forEach((label) => customMap.addCircleMarker(label));
