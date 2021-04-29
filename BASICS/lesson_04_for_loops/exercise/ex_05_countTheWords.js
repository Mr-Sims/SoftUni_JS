function countTheWords(input){
    let text = input[0];
    let counter = 1
    for (i = 1; i <= text.length; i++){
        if (text[i] === " "){
            counter += 1
        }
        
    }if (counter > 10){
        console.log(`The message is too long to be send! Has ${counter} words.`)
    }else{
        console.log(`The message was sent successfully!`)
    }
}

countTheWords(["This message has exactly eleven words. One more as it's allowed!"])
countTheWords(["This message has ten words and you can send it!"])