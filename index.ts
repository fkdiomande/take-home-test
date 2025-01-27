import { Drug, Pharmacy } from "./pharmacy";
import { writeFile } from "fs";

const drugs: Drug[] = [
    new Drug("Doliprane", 20, 30),
    new Drug("Herbal Tea", 10, 5),
    new Drug("Fervex", 12, 35),
    new Drug("Magic Pill", 15, 40),
];
const pharmacy: Pharmacy = new Pharmacy(drugs);

const log: Drug[][] = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
writeFile(
    "output.json",
    JSON.stringify({ result: log }, null, 2).concat("\n"),
    (err) => {
        if (err) {
            console.log("error");
        } else {
            console.log("success");
        }
    },
);

/* eslint-enable no-console */
