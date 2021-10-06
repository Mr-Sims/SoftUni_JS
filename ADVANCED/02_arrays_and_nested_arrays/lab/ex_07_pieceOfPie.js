function pie(pies, startPie, endPie) {
    const startIndex = pies.indexOf(startPie);
    const endIndex = pies.indexOf(endPie);
    
    const resArray = pies.slice(startIndex, endIndex+1);

    return resArray;
}

console.log(pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))

console.log(pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'))