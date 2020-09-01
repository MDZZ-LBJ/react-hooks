import React , { useState , createContext , useContext}from 'react';

// useContext 用来解决组件传值

const CountContext = createContext() //创建上下文对象

function Son() {
    let count = useContext(CountContext) // 接受父组件传来的 count
                                         // 括号里面要使用父组件的上下文对象

    return <h1>Son 子组件   {count} </h1>
}

function Test() {

  const [ count , setCount ] = useState(0)

  return (
    <div  >

       <p>你点击了{count}次</p>
       <button onClick={()=>setCount(count+1)}>点我</button>

        <CountContext.Provider value={count}> {/* 使用Provider 将 count 传给子组件 */}
            <Son></Son>
        </CountContext.Provider>

    </div>
  );
}

export default Test;
