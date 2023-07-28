// 변수 목록= 체중 , 키
let weight = 160;
let height = 50;
const weight_bt = document.querySelector('#weight_btn');
const height_bt = document.querySelector('#height_btn');
console.log(weight_bt, height_bt);
//------
weight_bt.addEventListener('click',function(){
    result1.value = weight;
})
height_bt.addEventListener('click', function(){
    result2.value = height;
})

