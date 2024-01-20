import { Student } from "./user/Student.js";
import { Faculty } from "./user/Faculty.js";
import { Bike } from "./vehicle/Bike.js";
import { Car } from "./vehicle/Car.js";
import { Cycle } from "./vehicle/Cycle.js";
import { DailyPass } from "./pass/DailyPass.js";
import { MonthlyPass } from "./pass/MonthlyPass.js";
import { YearlyPass } from "./pass/YearlyPass.js";

//objects array
const users = [];
const vehicles = [];
const passes =[];


document.addEventListener('DOMContentLoaded', () =>{
  let userSubmitbutton = document.getElementById("usersubmitbutton");
  userSubmitbutton.addEventListener('click', registerUser);
  let vehiclesubmitbutton = document.getElementById("vehiclesubmitbutton");
  vehiclesubmitbutton.addEventListener('click', registervehicle);
})

//assignment kbhi hosting ka part ni hota 
//const vala function phele hi call ho jaega dom load hone se phele hi esliye error ni aaegi

//for user
const registerUser = (e) =>{
  e.preventDefault()
  let userName = document.getElementById('userName').value;
  let userContact = document.getElementById('userContact').value;
  let userrole = document.getElementById('userRole').value;
  let user =null
  //user ke liye switch case acc to role
  switch(userrole){
    case "student":
    user = new Student(userName,userContact);
    break;
    case "faculty":
    user = new Faculty(userName,userContact);
    break;
    default:break;

  }

 users.push(user);//pushing user in object array that we have defined earlier
console.log(users);
 
}
//for passes


  //input bnaya uska type button kr diya.
//showpasschoice options generating function
//made object of daily,monthly,yearly passes
const showpasschoice = (vehicle) => {
  let dailypass = new DailyPass(vehicle);
  let monthlypass = new MonthlyPass(vehicle);
  let yearlypass = new YearlyPass(vehicle);

  let passchoice = document.getElementById('passchoice');
//created a button jisme agr daily pr click hoga toh voh dalipass ke object ko push krega passes ke object array me then we get 
//our daily pass slip 

  let button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.value = 'Daily: ' + dailypass.price;//yha button me daily n uske coorespondance price show hojaegi
  button.addEventListener('click', () => {
    passes.push(dailypass);
    dailypass.print();
  });
  passchoice.appendChild(button);

  button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.value = 'Monthly: ' + monthlypass.price;
  button.addEventListener('click', () => {
    passes.push(monthlypass);
    monthlypass.print();
  });
  passchoice.appendChild(button);

  button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.value = 'Yearly: ' + yearlypass.price;
  button.addEventListener('click', () => {
    passes.push(yearlypass);
    yearlypass.print();
  });
  passchoice.appendChild(button);//button html me show ho jaegi
  //appends a node (element ) as last child of an element.
  //to add dynamically at last
  //toh particular specified parent node ke undr end of list me add kr dega node ko
};

//for vehicle..
const registervehicle = (e) =>{
  e.preventDefault()//to prevent the default values so we have to not write again ..
  let vehicleName = document.getElementById('vehicleName').value;
  let owner = users[users.length -1]
  let type = document.getElementById('type').value;
  
  let vehicle = null
  switch(type){
    case "cycle":
    vehicle = new Cycle(vehicleName, owner);
    break;
    case "bike":
    vehicle = new Bike(vehicleName, owner);
    break;
    case "car":
    vehicle = new Car(vehicleName, owner);
    break;
    default:break;

  }

vehicles.push(vehicle);
console.log(vehicles);
showpasschoice(vehicle);
 
}
//submit button rhega toh html elements rhege 





