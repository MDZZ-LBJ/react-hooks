import React , { useState , useRef ,useEffect}from 'react';

// useRef 可以用来获取dom元素 和 保存普通变量

function Test() {

// 获取dom元素
    const inputEl = useRef()

    const buttonClick=()=>{
        console.log( inputEl )
        inputEl.current.value = 123
    }


// 保存数据
  const [text , setText] = useState(0)

  const  textRef = useRef()

  useEffect(()=>{
      textRef.current = text
      console.log( textRef.current )
  })


  return (
    <>
        {/* 获取dom元素 */}
        <input type="text" ref={inputEl} /> {/* 将 inputEl 传入 ref 这样就获取到了 input 的dom元素 */}
        <button onClick={buttonClick}> 点击 </button>

        <br/>
        <br/>

        {/*  保存数据 */}
        <input type="text" value={text} onChange={e=>setText(e.target.value)} />
    </>
  );
}

export default Test;
