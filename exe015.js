// F8    urubu

let num = [4, 3, 5];
num[3] = 7;
console.log(num);
num.push(9);// apped no python
console.log(num)
num.sort(); //ordena
console.log('ex 1');
for (let pos = 0; pos<num.length; pos++){
    console.log(num[pos]);
}


console.log('ex 2');
for (let pos in num){
    console.log(num[pos]);
}

console.log(num.indexOf(7));
