// // ver 1
// function employees(empls, criteria) {
//     const data = JSON.parse(empls)

//     const [crit, value] = criteria.split('-')

//     const result = []
//     const filtered = data
//     .filter((em) => {return em[crit] == value})
  
//     for (let i = 0; i < filtered.length; i++) {
//         result.push(`${i}. ${filtered[i].first_name} ${filtered[i].last_name} - ${filtered[i].email}`)
//     }
//     return result.join('\n')
// };

// ver 2 - chained
function employees(empls, criteria) {
    const data = JSON.parse(empls)
    const [crit, value] = criteria.split('-')

    return data
    .filter((em) => {return em[crit] == value})
    .map((em, i) => `${i}. ${em.first_name} ${em.last_name} - ${em.email}`)
    .join('\n')
};


// employees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`, 
// 'gender-Female');


console.log(employees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'))