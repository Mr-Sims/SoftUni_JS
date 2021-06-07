function salary(input){
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (i = 2; i <= tabs+1; i++){
    //     if (input[i] === "Facebook"){
    //         salary -= 150;
    //     }else if (input[i]=== "Instagram"){
    //         salary -= 100;
    //     }else if (input[i] === "Reddit"){
    //         salary -= 50;
    //     }if (salary <= 0){
    //         console.log("You have lost your salary.");
    //         break;
    //     }
    // }

        let currentTab = input[i]
        switch(currentTab) {
            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break;
        }
    }
    if (salary > 0){
    console.log(Math.floor(salary))
    } else {
        console.log('You have lost your salary.')
    }

}
//salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])

//salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])

// salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])

salary(['1', '1500', "Facebook"])