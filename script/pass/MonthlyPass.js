import { Pass } from "./pass.js";
export class MonthlyPass extends Pass {
  constructor(vehicle) {
    let Currentdatetime = new Date();
    Currentdatetime.setMonth(Currentdatetime.getMonth() + 1);
    let price = 0;

    switch (vehicle.type) {
      case "Cycle":
        price = 100; 
        break;
      case "Bike":
        price = 200; 
        break;
      case "Car":
        price = 300; 
        break;
      default:
        break;
    }

    super(vehicle, Currentdatetime, price);

    this.type = "monthlypass";
  }
}