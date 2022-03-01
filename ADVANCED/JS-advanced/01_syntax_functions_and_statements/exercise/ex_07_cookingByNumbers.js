//////////////////////////////////////////////////////////
// using switch


// function cooking(...param) {
//     let starPoint = Number(param[0]);
    
//     for (let i = 1; i <= 5; i++) {
//         switch(param[i]) {
//             case 'chop': starPoint /= 2; break;
//             case 'dice': starPoint = Math.sqrt(starPoint); break;
//             case 'spice': starPoint += 1; break;
//             case 'bake': starPoint *= 3; break;
//             case 'fillet': starPoint *= 0.8; break;
//         }
//         console.log(starPoint)
//     }
// }

///////////////////////////////////////////////////////
// using object instead of switch


function cooking(...param) {
    let startingPoint = param[0];
    const parser = {
        chop() {startingPoint /= 2},
        dice() {startingPoint = Math.sqrt(startingPoint)},
        spice() {startingPoint += 1},
        bake() {startingPoint *= 3},
        fillet() {startingPoint *= 0.8}
    }
    for (let i = 1; i <= 5; i++) {
        const command = param[i];
        parser[command]()
        console.log(startingPoint)
    }
}

cooking('32', 'chop','chop','chop','chop','chop',);
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); 