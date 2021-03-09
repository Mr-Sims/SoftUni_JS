function projectsCreation(input) {
    let architect = input[0]
    let projectsCount = Number(input[1])
    let hoursToComplete = projectsCount * 3
    result = `The architect ${architect} will need ${hoursToComplete} hours to complete ${projectsCount} project/s.`
    console.log(result)
}

projectsCreation(["George", "4"])