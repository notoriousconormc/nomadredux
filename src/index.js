// import { count } from "console";
import { createStore } from "redux";   //store 나의 data state를 넣는곳 



const add = document.getElementById("add")
const MINUS = document.getElementById("minus")
const number = document.querySelector("span")
number.innerText = 0 ;

//간단하게 설명 
// 나의 데이터를 수정할수있는 펑션은 countModifier ,  그래서 나는 밖에서 countModifier와 커뮤니케이션을 해야해 
// 커뮤니케이션하는방법은 countModifier에 액션을 보내는것임

const countModifier = ( count = 0 , action) => {  
    // 파라미터에 이니셜스테이트 , 엑션 넣어주자  엑션은 리덕스에서 function을 부를때 쓰는 두번째 파라미터 혹은 argument
    // 5. 메세지는 엑션에 넣고 , 엑션을 체크해보자 
    if(action.type === "ADD"){
        // ...count,
        return count + 1;
    } else if (action.type === "MINUS"){   //6. else if 다른액션
        return count -1;
    } else {    // 7. 다른 액션이 없으면 리턴한다 
        return count 
    }
};  //reducer은 함수다 

const countStore = createStore(countModifier);  
// 1 . 우리는 스토어를 먼저만들어야한다 데이터를 넣기위해 , 스토어를 만들면 리듀서도 만들어달라고 한다 여기서 리듀서(countModifier) 
// 2 . 여기서 reducer == countModifier   ,  데이터는 countModifier에서만 바꿀수있다
// 



countStore.dispatch({type:"ADD"}); 
countStore.dispatch({type:"MINUS"}); 
//  3 . 액션은 object로 정해주세요  {type:"fuck"} 이렇게 
// 4. dispatch와 액션이 함께 countModifier(reducer)에 메세지를 보낸다 (이런식으로 행동하겠다는) 


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