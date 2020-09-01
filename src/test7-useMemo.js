import React , { useState ,useMemo }from 'react';

// useMemo 缓存数据 ，解决 react hooks 性能问题 类似于shouldComponentUpdat
// 和 useEffect 用法一样

function ChildComponent({name,children}) {

    useMemo(()=> console.log('-------- '),[name]) ///只有name变化时才执行 即lbj
console.log( children )
    return (
        <>
            <div>{name}</div>
            <div>{children}</div>
        </>
    )
}

function Test() {

  const [ lbj , setLbj] = useState('lbj 在打球')
  const [ wade , setWade ] = useState('wade 在打球')


  return (
    <> {/* 空标签 类似于 Fragment */}

        <button onClick={()=>{setLbj('lbj 正在走来')}}>lbj</button>
        <button onClick={()=>{setWade('wade 正在走来')}}>wade</button>
        <ChildComponent name={lbj}>
            {wade}
        </ChildComponent>
    </>
  );
}

export default Test;
