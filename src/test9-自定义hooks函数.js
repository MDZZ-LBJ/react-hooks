import React , { useState , useCallback ,useEffect}from 'react';

 // useCallback 用来优化方法 缓存方法
 // 自定义 hooks 函数必须要以 use开头


function useWithSize() { // 监听窗口大小改变

    const [ size , setSize ] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })

    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize')
            console.log('移除监听事件')
        }
    },[])

    return size
}

function Test() {
    const size =useWithSize()

    return (
        <div>页面size：{JSON.stringify(size)}</div>
    )
}

export default  Test
