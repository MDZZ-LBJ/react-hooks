import React , { useState , useEffect}from 'react';
import { BrowserRouter , Route , Link } from  'react-router-dom'

// useEffect 第一个参数 里面可以写return 一个函数
// 1 . 用于实现 组件销毁时执行的方法 类似于 componentWillUnMount
//     但是这种方式 只要数据发生改变 都会执行销毁方法
// 2. 可以使用 useEffect 第二个参数 是一个数组 , 为空时表示只有组件
//     真正销毁时才执行 return 后面的函数

function Index() {
    useEffect(()=>{
        console.log('您来了 Index 页面')
        return ()=>{
            console.log('您离开了 Index 页面')
        }
    },[])
    return <div>我是 Index 页面</div>
}

function My() {
    useEffect(()=>{
        console.log('您来了 MY 页面')
        return ()=>{
            console.log('您离开了 MY 页面')
        }
    })
    return <div>我是 My 页面</div>
}

function Test() {

  const [ count , setCount ] = useState(0)

    useEffect(()=>{
        console.log(`您点击了${count}次`)
        return ()=>{
            console.log('===========')
        }
    },[count])  // 传入count 表示 只要 count 改变就会执行 return 后面函数


  return (
    <div  >

       <p>你点击了{count}次</p>
       <button onClick={()=>setCount(count+1)}>点我</button>

        <BrowserRouter>
            <Link to='/'>首页</Link>
            <Link to='/my'>我的</Link>

            <Route path='/' exact component={Index}></Route>
            <Route path='/my' component={My}></Route>
        </BrowserRouter>

    </div>
  );
}

export default Test;
