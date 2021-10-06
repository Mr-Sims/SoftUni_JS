function heroicInventory(input) {
    let result = [];
    for (const i of input) {
        let [name, level, items] = i.split(' / ');
        // level = Number(level);
        // items = items ? items.split(', ') : [];
        let currentObject = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        };
        result.push(currentObject);
    }
    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));