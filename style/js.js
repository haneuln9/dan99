// 변수 목록= 체중 , 키입력버튼 초기화 버튼
let weight = []
let height = []
const weight_bt = document.querySelector('#w_btn');//키
const height_bt = document.querySelector('#h_btn');//몸무게
const reset = document.querySelector('#reset');//초기화
console.log(weight_bt, height_bt, reset);
//------
weight_bt.addEventListener('click',function(){
    userWeight.value = weight;
})
height_bt.addEventListener('click', function(){
    userHeight.value = height;
})

// reset.addEventListener ('click', function(){
//     pwd.value = null;
// })

