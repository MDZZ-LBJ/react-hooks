import React , {  useReducer}from 'react';

// useReducer 基本使用 类似于 redux 中的 reducer

function Test() {
                               // action , 初始值
  const [ count , dispatch ] = useReducer((state , action)=>{
      switch(action){
          case 'add' :
              return state + 1
          case  'sub' :
              return state - 1
          default :
              return state
      }

  },0)

  return (
    <div  >

       <p>现在的次数为{count}次</p>
       <button onClick={()=>dispatch('add')}>加</button>
       <button onClick={()=>dispatch('sub')}>减</button>

    </div>
  );
}

export default Test;
