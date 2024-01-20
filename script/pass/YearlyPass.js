import { Pass } from "./pass.js";

export class YearlyPass extends Pass {
  constructor(vehicle) {
    let Currentdatetime = new Date();
    Currentdatetime.setFullYear(Currentdatetime.getFullYear() + 1);

    let price = 0;

    switch (vehicle.type) {
      case "Cycle":
        price = 500;
        break;
      case "Bike":
        price = 1000;
        break;
      case "Car":
        price = 1500;
        break;
      default:
        break;
    }

    super(vehicle, Currentdatetime, price);

    this.expiry = Currentdatetime;
    this.type = "yearlypass";
  }
}
