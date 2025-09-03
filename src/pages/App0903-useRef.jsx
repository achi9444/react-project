import React, { useRef, useState } from 'react'

const App = () => {
    // const [inputValue, setinputValue] = useState('');

    // useRef變數，給input標籤
    const inputRef = useRef(null);
    console.log('app渲染了')

    function btnHandler() {
        // console.log(inputValue)

        // 查看ref物件
        console.log(inputRef)

        // 查看ref值
        console.log(inputRef.current.value)
        // 查看ref型別
        console.log(inputRef.current.type)
        // 更改類別
        inputRef.current.type = "password"

        // 查看ref型別
        console.log(inputRef.current.type)



    }

    return (
        <div className='wrap'>
            <h1>useRef</h1>
            {/* useState */}
            {/* <input type="text" value={inputValue} onChange={(e) => setinputValue(e.target.value)} /> */}
            {/* useRef */}
            <input type="text" ref={inputRef} />
            <button onClick={btnHandler}>Click</button>
        </div>
    )
}

export default App