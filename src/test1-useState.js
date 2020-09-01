import React , { useState }from 'react';


function Test() {

  const [ count , setCount ] = useState(0)

  // if(1){   报错 useState 不能出现在条件 判断等语句中 必须按照顺序写下来 顺序一致
  //   const [ name , setName ] = useState('张三')
  // }

  return (
    <div  >

       <p>你点击了{count}次</p>
       <button onClick={()=>setCount(count+1)}>点我</button>

    </div>
  );
}

export default Test;
