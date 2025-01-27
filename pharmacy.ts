export class Drug {
    name: string;
    expiresIn: number;
    benefit: number;

    constructor(name: string, expiresIn: number, benefit: number) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }
}

export class Pharmacy {
    drugs: Drug[];

    constructor(drugs: Drug[] = []) {
        this.drugs = drugs;
    }

    private increaseBenefit(drug: Drug, amount: number = 1) {
        if (drug.benefit < 50) {
            drug.benefit = Math.min(50, drug.benefit + amount);
        }
    }

    private decreaseBenefit(drug: Drug, amount: number = 1) {
        if (drug.benefit > 0) {
            drug.benefit = Math.max(0, drug.benefit - amount);
        }
    }

    private updateFervex(drug: Drug) {
        if (drug.expiresIn < 0) {
            drug.benefit = 0;
            return;
        }

        this.increaseBenefit(drug);

        if (drug.expiresIn < 10) {
            this.increaseBenefit(drug);
        }
        if (drug.expiresIn < 5) {
            this.increaseBenefit(drug);
        }
    }

    private updateHerbalTea(drug: Drug) {
        this.increaseBenefit(drug);
        if (drug.expiresIn < 0) {
            this.increaseBenefit(drug);
        }
    }

    private updateRegularDrug(drug: Drug) {
        this.decreaseBenefit(drug);
        if (drug.expiresIn < 0) {
            this.decreaseBenefit(drug);
        }
    }

    public updateBenefitValue(): Drug[] {
        for (const drug of this.drugs) {
            if (drug.name === "Magic Pill") {
                continue;
            }

            drug.expiresIn--;

            switch (drug.name) {
                case "Fervex":
                    this.updateFervex(drug);
                    break;
                case "Herbal Tea":
                    this.updateHerbalTea(drug);
                    break;
                default:
                    this.updateRegularDrug(drug);
                    break;
            }
        }

        return this.drugs;
    }
}
