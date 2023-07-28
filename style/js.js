// 변수 목록= 체중 , 키입력버튼 초기화 버튼
let weight = []
let height = []
const userWeight = document.querySelector ('#userWeight'); //키입력
const userHeight = document.querySelector ('#userHeight'); //몸무게 입력
const bt = document.querySelector('#btn');//버튼
// const height_bt = document.querySelector('#h_btn');//몸무게 버튼
// const reset = document.querySelector('#reset');//초기화버튼
console.log(weight_bt, height_bt, reset);
//------
bt.addEventListener('click',function(){
    userWeight.value = weight;
})

// height_bt.addEventListener('click', function(){
//     userHeight.value = height;
// })

// reset.addEventListener ('click', function(){
//     pwd.value = null;
// })

