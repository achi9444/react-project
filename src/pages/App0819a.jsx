import React from 'react'

// 建立一個子元件
// function MyComponent(props) {

// 物件解構=>{物件成員}
function MyComponent({ a, b, c }) {
    // console.log(props)
    // c();//傳遞函式元件的時候要先呼叫
    return <>
        <div>hello!</div>
        {/* 標準寫法 */}
        {/* <div>{props.a}</div>
        <div>{props.b}</div> */}
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

function MyComponent2({ a, b = "我是預設值", c }) {
    // console.log(props)
    // c();//傳遞函式元件的時候要先呼叫
    return <>
        <div>hello!2</div>
        {/* 標準寫法 */}
        {/* <div>{props.a}</div>
        <div>{props.b}</div> */}
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

//父元件
const App0819a = () => {
    return (
        <>
            <MyComponent a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <MyComponent2 a="我是屬性a" b="dssf" c={() => { console.log("123") }} />
        </>
    )
}

export default App0819a