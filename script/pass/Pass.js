export class Pass {
  constructor(vehicle, expiry, price) {
    this.id = "pass-" + new Date().getTime();
    this.vehicle = vehicle;
    this.expiry = expiry;
    this.price = price;
  }

  print = () => {
    let passToBePrint = `
      <div>
        <label>Pass ID :</label>
        <label>${this.id}</label>
      </div>
      <div>
        <label>Vehicle : </label>
        <label>${this.vehicle.type}</label>
      </div>
      <div>
        <label>Owner's name :</label>
        <label>${this.vehicle.owner.name}</label>
      </div>
      <div>
        <label>Expiry :</label>
        <label>${this.expiry}</label>
      </div>
    `;


    let ticket = document.getElementById('ticket');
    ticket.innerHTML = passToBePrint;
  };
}







