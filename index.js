let arr =[1,2,3,4,5,6];
console.log('arr',arr);
for(key in arr){
    console.log(arr);
}
for(valu of arr){
console.log(arr);
}
arr.splice(1,2,'F','G');
console.log('arr',arr);
let value;
function myfunk(value){
if(value >=0 && value <=11){
    alert('Children')
}
    if(value >=11 && value <=18){
    alert('Teenagers')
}
if(value >=18){
    alert('adults')
}
if(value <=0 || value >=105){
    alert('Ops')
}
}