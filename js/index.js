 console.log('Hello World!')
// document.write('<h1>Hello World</h1>');
/*
for (let i = 100; i >= 2; i-=2) {
    document.write('<h1>' + i + ' Hello JS!</h1>');
}

let i = 1;

while(i <= 100) {
    document.write('<h1>' + i + ' Hello JS!</h1>');
    i++;
}

let num = parseFloat(prompt('Enter a number'));

while(isNaN(num)){
    alert("Please enter a number")
    let num = parseFloat(prompt('Enter a number'));
}

alert('You enter a' + num)


let num;
do {
    alert('Please enter a number');
    num = parseFloat(prompt('Enter a number'));
} while (isNaN(num))
alert('Thank you! You entered number: ' + num);


function padIt(str,n){
    while(n > 0){
        if(n % 2) {
            str = '*' + str;
        }else {
            str = str + '*';
        }
    }
    return str;
}
console.log(padIt("a",2),"*a");

*/
//let productNames = ['Toyota Corrola', 'Tesla model S', 'Chevrolet Corvet'];
/*
alert(productNames.length);
productNames.push('Ferrari laFerarri');
alert(productNames.length);
productNames[4] = 'BMW X6';
alert(productNames.length);
productNames[10] = 'BMW Xddd6';
alert(productNames.length);

for (let i = 0; i <productNames.length; i++) {
    if(productNames[i])
    document.write(productNames[i]+ '<br>')
}


function printVal (value){
    document.write(value +'<br>');
}

productNames.forEach(printVal);


productNames.forEach(function(el){
    document.write(el + '<b>');
});


productNames.forEach(el => document.write(el + '<br>'));
*/
    var uniqueInOrder=function(iterable){
   let arr = iterable;
    for (let i = 0; i < arr.length; i++){
    if(iterable[i] === iterable[i + 1 ]){
      arr.slice(i, 1);
  }
  }
    return arr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));