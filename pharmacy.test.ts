import { expect, describe, it } from "bun:test";
import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
    it("should decrease the benefit and expiresIn", (): void => {
        expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
            [new Drug("test", 1, 2)],
        );
    });
});
