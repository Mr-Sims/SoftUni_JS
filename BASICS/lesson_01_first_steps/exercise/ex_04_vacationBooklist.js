function book(input) {
    let pagesCount = Number(input[0])
    let pagesPerHour = Number(input[1])
    let daysCount = Number(input[2])
    let res = (pagesCount / pagesPerHour) / daysCount
    console.log(res)

}

book(["212", "20", "2"])