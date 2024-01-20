
import { Pass } from "./pass.js";
export class DailyPass extends Pass {
  constructor(vehicle) {
    let Currentdatetime = new Date();
    Currentdatetime.setDate(Currentdatetime.getDate() + 1);
    let price = 0;

    switch (vehicle.type) {
      case "Cycle":
        price = 5;
        break;
      case "Bike":
        price = 10;
        break;
      case "Car":
        price = 15;
        break;
      default:
        break;
    }

    super(vehicle, Currentdatetime, price);

    this.type = "dailypass";
  }
}
//parent class ko ni krna ho 
