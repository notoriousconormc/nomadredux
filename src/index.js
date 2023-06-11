// import { count } from "console";
import { createStore } from "redux";   //store 나의 data state를 넣는곳 



const add = document.getElementById("add")
const MINUS = document.getElementById("minus")
const number = document.querySelector("span")


number.innerText = 0 ;

const ADD = "ADD";
const MINUS2 = "MINUS2";
//이런식으로 타입지정해주면 틀리면 에러떠서 어디가 틀렸는지 금방알수있음 만약에 string를 사용한다면 자바스크립트는 아무 말도 안해주고실행도안될거임 


const countModifier = ( count = 0 , action) => {  
    switch (action.type){  // 액션은 1, 무조건 오브젝트  그리고 2 , 이름은 무조건 type  3, reducer(countModifier)과 소통하는방법
        case "ADD":
            return count + 1;
        case "MINUS2":
            return count - 1;
        default:
            return count;    
    }
}

//action은 countModifier과 소통하는방법 
//reducer{countModifier}가 리턴하는 것은 무엇이든지 어플리케이션의 스테이트가 된다 
// dispatch가 리듀서를 불러서 현재 스테이트와 액션을 



const countStore = createStore(countModifier);  




countStore.dispatch({type:"ADD"}); 
countStore.dispatch({type:"MINUS"}); 


console.log(countStore)  // 4개의 펀션을 사용함 각자 다른 사용목적

const onChange = () => {
    number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({type:"ADD"})
}
const handleMinus = () => {
    countStore.dispatch({type:"MINUS"})
}

add.addEventListener("click",handleAdd)
MINUS.addEventListener("click",handleMinus)





 
// let count = 0;

// number.innerText = count;

// const updateText = () => {
//     number.innerText = count;
// }


// const handleAdd = () => {
//     count = count + 1;
//     updateText();
// }

// const handleMinus = () => {
//     count = count -1;
//     updateText();
// }

// add.addEventListener("click",handleAdd);
// minus.addEventListener("click",handleMinus);