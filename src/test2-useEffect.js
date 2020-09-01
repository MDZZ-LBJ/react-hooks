import React , { useState , useEffect}from 'react';

// useEffect
// 1. 是异步的
// 2. 可以代替 componentDidMount componentWiiUpdate 生命周期函数

function Test() {

  const [ count , setCount ] = useState(0)

    useEffect(()=>{
        console.log('======>'+count)
    })

  return (
    <div  >

       <p>你点击了{count}次</p>
       <button onClick={()=>setCount(count+1)}>点我</button>

    </div>
  );
}

export default Test;
