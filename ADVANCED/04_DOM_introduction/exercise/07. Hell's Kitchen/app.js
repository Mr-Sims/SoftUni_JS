// function solve() {
//    document.querySelector('#btnSend').addEventListener('click', onClick);

//    function onClick () {
//       //    1. Select elements for input
//       let textAreaElement = document.querySelector('#inputs textarea');
      
//       //    2. Extract/Parse input data
//       let text = textAreaElement.value;
//       let inputArr = JSON.parse(text);

//       //    3. Add object to keep restauran and workers data
//       let restaurants = {}
//       //    4. Fill restaurant object with input data
//       for (let index = 0; index < inputArr.length; index++) {
//          let [restaurantName, workersString] = inputArr[index].split(' - ');
//          let inputWorkers = workersString.split(', ').map(w => {
//             let [name, salary] = w.split(' ');
//             return { 
//                name,
//                salary: Number(salary) };
//          });

//          if (!restaurants[restaurantName]) {
//             restaurants[restaurantName] = {
//                workers: [],
//                restaurantName: restaurantName,
//                getAverageSalary: function(w) {
//                   return w.reduce((acc, el) => acc + el, 0) / w.length;
//                }
//             };
//          }
//          restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);
//       }


//       //    5. Calculate best restaurant
//       let sortedRestaurants = Object.values(restaurants)
//          .sort((a,b)=> {
//             let bAvgSalary = b.workers.reduce((acc, el) => acc + el.salary, 0) / b.workers.length;
//             let aAvgSalary = a.workers.reduce((acc, el) => acc + el.salary, 0) / a.workers.length;
//             return bAvgSalary - aAvgSalary;
//          });
//       let bestRestaurant = sortedRestaurants[0];
//       let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary)
//       let averageSalary = bestRestaurant.workers.reduce((acc,el) => acc+el.salary, 0 ) / bestRestaurant.workers.length;

//       // let a = restaurants[bestResaturant[0]].getAverageSalary();
//       let bestSalary = sortedWorkers[0].salary.toFixed(2);
//       let topRestauranString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary.toFixed(2)} Best Salary ${bestSalary}`;
//       let workersString = sortedWorkers
//       .map(x => `Name: ${x.name} With Salary: ${x.salary}`)
//       .join(' ');

//       //    6. Insert best resaurant in DOM
//       let bestRestaurantElement = document.querySelector('#bestRestaurant p');
//       let workersElement = document.querySelector('#workers p');

//       bestRestaurantElement.textContent = topRestauranString;
//       workersElement.textContent = workersString;
//    }
// }

function solve() {
   

   function onClick() {
      let array = JSON.parse(input.value);
      let restaurants = {};

      array.forEach(line => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArray = tokens[1].split(', ');
         let workers = [];
 
         for (const worker of workersArray) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            workers.push({ name: workerTokens[0], salary })
         }
         if(restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         } 
         workers.sort((a, b) => b.salary - a.salary);
         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      });
      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = { 
               name, 
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
                                    
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }
 
      bestRestaurantParagraph.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let workersResult = [];
      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });
 
      workersParagraph.textContent = workersResult.join(' ');
   }
}