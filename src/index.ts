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

// The Dropdown for Cities
const root = document.querySelector(".cities");
root.innerHTML = `
<div class="dropdown">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Choose a city</span>
      <span class="icon is-small">
        <!--fontawesome required for the icon-->
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href='#' data-value="oak" class='oak dropdown-item'>
        Oakland, CA
      </a>
      <a href='#' data-value="san" class='san dropdown-item'>
        San Francisco, CA
      </a>
    </div>
  </div>
</div>
`;

const dropdown = document.querySelector(".dropdown");

document.querySelector(".dropdown-trigger").addEventListener("click", (e) => {
  dropdown.classList.toggle("is-active");
});

document.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    if (event !== null && event.target instanceof HTMLElement) {
      const element = event.target;
      if (element.matches(".dropdown-item.oak")) {
        console.log("Oakland was clicked");

        customMap.addOakland();
        data.forEach((label) => customMap.addCircleMarker(label));
        console.log("inside the if conditional", data);
        dropdown.classList.toggle("active");
      }
      if (element.matches(".dropdown-item.san")) {
        console.log("San Francisco was clicked");
        customMap.addSanFran();
        data.forEach((label) => customMap.addCircleMarker(label));
        dropdown.classList.toggle("active");
      }
    }
  },
  false
);
