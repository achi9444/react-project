import React, { useState } from 'react'

const CreateForm = ({ todos, setTodos }) => {
    // 方法1
    const [content, setContent] = useState('');

    function addData() {
        console.log(content.length);

        if (content.length === 0) {
            alert('空');
        } else {
            setTodos([...todos, { content: content, id: Math.random(), isCompleted: false }]);
            setContent('');
        }
        let myInput = document.getElementById('myInput');
        myInput.focus();  // 指定游標位置
    }

    return (
        <>
            <form className='create-form'>
                <input
                    id="myInput"
                    type="text"
                    placeholder='輸入待辦事項'
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value.trim());
                        // console.log(e.target.value);
                    }} />
                <button type="button" onClick={addData}>加入</button>
            </form >
        </>
    )
}

// 方法2
// const CreateForm = ({ addTodo }) => {
//     // console.log(addTodo);
//     const [txt, setTxt] = useState('');

//     return (
//         <>
//             <form className='create-form'>
//                 <input 
//                 id="myInput"
//                 type="text"
//                     placeholder='輸入待辦事項'
//                     value={txt}
//                     onChange={(e) => {
//                         setTxt(e.target.value.trim());
//                         // console.log(e.target.value);
//                     }} />
//                 <button type="button" onClick={() => {
//                     addTodo(txt);
//                     setTxt('');
//                     let myInput = document.getElementById('myInput');
//                     myInput.focus();  // 指定游標位置
//                 }}>加入</button>
//             </form>

//         </>
//     )
// }

export default CreateForm