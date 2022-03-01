function solve() {
  let text = document.getElementById('text').value
  let namingConv = document.getElementById('naming-convention').value
  let result = document.getElementById('result')
  
  if (namingConv == 'Camel Case') {
    let textAsArr = text.split(' ');
    let res = `${textAsArr[0].toLowerCase()}`
    for (i = 1; i < textAsArr.length; i++) {
      const str = textAsArr[i];
      const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      res += str2
    }
    result.innerHTML = res
  } else if (namingConv == 'Pascal Case') {
    let textAsArr = text.split(' ');
    let res = ``
    for (i = 0; i < textAsArr.length; i++) {
      const str = textAsArr[i];
      const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      res += str2
    } 
    result.innerHTML = res
  } else {
    result.innerHTML += 'Error!'
  }
}