// 변수  키입력 몸무게 입력 standard(정상체중 계산) 
const user_weight = document.querySelector ('#user_weight'); //몸무게
const user_height = document.querySelector ('#user_height'); //키 입력
const bt = document.querySelector('#btn');//버튼
const m_weight = document.querySelector ('.m_weight'); //적정 체중
const weight_minus = document.querySelector ('.weight_minus');//초과된 몸무게
let normal_w
//-------------확인
console.log(user_weight, user_height, bt, m_weight ,weight_minus);
//-------------체중 계산
bt.addEventListener('click',function(){
    normal_w = (user_height.value - 100 ) * 0.9 
    m_weight.innerHTML = `적정체중은 ${normal_w} kg 이며`  
	weight_minus.innerHTML = ` ${user_weight.value - normal_w} kg 초과되셨습니다.`
})
//-----------------------------------------------------------------------------

