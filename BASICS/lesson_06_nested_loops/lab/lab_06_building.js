function building(input) {
    let floorsCount = Number(input[0]);
    let roomsPerFloorCount = Number(input[1]);

    for (let floor = floorsCount; floor >= 1; floor--) {
        let result = ''
        for (let room = 0; room < roomsPerFloorCount; room++) {
            
            if (floor === floorsCount) {
                result += `L${floor}${room} `;
            }
            else if (floor % 2 === 0) {
                result += `O${floor}${room} `;
            }
            else if (floor % 2 != 0) {
                result += `A${floor}${room} `;
            }
        }
        console.log(result)
    }
}

//building(["6", "4"])

//building(["9", "5"])

//building(["4", "4"])
