// // solution 1
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      //    1. Select elements for input
      let textAreaElement = document.querySelector('#inputs textarea');
      
      //    2. Extract/Parse input data
      let text = textAreaElement.value;
      let inputArr = JSON.parse(text);

      //    3. Add object to keep restauran and workers data
      let restaurants = {}
      //    4. Fill restaurant object with input data
      for (let index = 0; index < inputArr.length; index++) {
         let [restaurantName, workersString] = inputArr[index].split(' - ');
         let inputWorkers = workersString.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { 
               name,
               salary: Number(salary) };
         });

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
               workers: [],
               restaurantName: restaurantName,
               getAverageSalary: function(w) {
                  return w.reduce((acc, el) => acc + el, 0) / w.length;
               }
            };
         }
         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);
      }


      //    5. Calculate best restaurant
      let sortedRestaurants = Object.values(restaurants)
         .sort((a,b)=> {
            let bAvgSalary = b.workers.reduce((acc, el) => acc + el.salary, 0) / b.workers.length;
            let aAvgSalary = a.workers.reduce((acc, el) => acc + el.salary, 0) / a.workers.length;
            return bAvgSalary - aAvgSalary;
         });
      let bestRestaurant = sortedRestaurants[0];
      let sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary)
      let averageSalary = bestRestaurant.workers.reduce((acc,el) => acc+el.salary, 0 ) / bestRestaurant.workers.length;

      // let a = restaurants[bestResaturant[0]].getAverageSalary();
      let bestSalary = sortedWorkers[0].salary.toFixed(2);
      let topRestauranString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary.toFixed(2)} Best Salary ${bestSalary}`;
      let workersString = sortedWorkers
      .map(x => `Name: ${x.name} With Salary: ${x.salary}`)
      .join(' ');

      //    6. Insert best resaurant in DOM
      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      let workersElement = document.querySelector('#workers p');

      bestRestaurantElement.textContent = topRestauranString;
      workersElement.textContent = workersString;
   }
}


///////////////////////////////////////////////////////
// solution 2
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let arr = JSON.parse(document.querySelector('#inputs>textarea').value);
      let bestRestOutput = document.querySelector('#bestRestaurant p');
      let bestWorkersOutput = document.querySelector('#workers p');
      let result = {};

      for (let el of arr) {
         let [restaurant, workers] = el.split(' - ')

         if (result[restaurant] == undefined) {
            result[restaurant] = []
         }

         let workersList = workers.split(', ')
         for (let w of workersList) {
            let [worker, salary] = w.split(' ')
            salary = Number(salary)
            let wo = { worker, salary }
            result[restaurant].push(wo)
         }
      }

      let bestRestaurant;
      let averageSalary;
      for (let el in result) {
         let averagesum = 0
         let currentRestAv = 0;
         for (let w of result[el]) {
            averagesum += w.salary
         }
         let av = averagesum / result[el].length
         if (av > currentRestAv) {
            bestRestaurant = el;
            averageSalary = av;
         }
      }
      let sorted = result[bestRestaurant].sort((a, b) => {
         a.salary - b.salary
      })
      let bestSalary = sorted[0].salary


      bestRestOutput.innerHTML = `Name: ${bestRestaurant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      let workersOutputList = []
      for (let w of sorted) {
         workersOutputList.push(`Name: ${w.worker} With Salary: ${w.salary}`)
      }
      bestWorkersOutput.textContent = workersOutputList.join(' ')
   }
}




// /////////////////////////////////////////////////////////////////////////////////
// // solution 3
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea')
   const bestRestaurantP = document.querySelector('#bestRestaurant>p')
   const bestworkersP = document.querySelector('#workers>p')


   function onClick() {
      let arr = JSON.parse(input.value);
      let restaurants = {};

      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');
         let workers = [];

         for (let worker of workersArr) {
            const workerToken = worker.split(' ');
            const salary = Number(workerToken[1])
            workers.push({
               name: workerToken[0], salary
            });
         }

         if (restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }
         workers.sort((w1, w2) => w2.salary - w1.salary)
         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((acc, curr) => acc + curr.salary, 0) / workers.length

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      })

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
            bestRestaurantSalary = restaurants[name].bestSalary
         }
      }

      bestRestaurantP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let workerRes = [];

      bestRestaurant.workers.forEach(worker => {
         workerRes.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })

      bestworkersP.textContent = workerRes.join(' ')
   }
}