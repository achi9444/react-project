import React, { useRef } from 'react'

const App = () => {
    // 建立useRef變數
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // function inputFocus1() {
    //     inputRef1.current.style.backgroundColor = "yellow";
    //     inputRef2.current.style.backgroundColor = "";
    //     inputRef3.current.style.backgroundColor = "";
    // }
    // function inputFocus2() {
    //     inputRef1.current.style.backgroundColor = "";
    //     inputRef2.current.style.backgroundColor = "yellow";
    //     inputRef3.current.style.backgroundColor = "";
    // }
    // function inputFocus3() {
    //     inputRef1.current.style.backgroundColor = "";
    //     inputRef2.current.style.backgroundColor = "";
    //     inputRef3.current.style.backgroundColor = "yellow";

    function inputFocus(no) {
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

        if (no === 1) {
            inputRef1.current.style.backgroundColor = "yellow";
        } else if (no === 2) {
            inputRef2.current.style.backgroundColor = "yellow";
        } else if (no === 3) {
            inputRef3.current.style.backgroundColor = "yellow";
        }
    }
    return (
        <div>

            文字方塊1<input ref={inputRef1} type="text" onFocus={inputFocus(1)} /> <br />
            文字方塊2<input ref={inputRef2} type="text" onFocus={inputFocus(2)} /> <br />
            文字方塊3<input ref={inputRef3} type="text" onFocus={inputFocus(3)} />


        </div>
    )
}

export default App