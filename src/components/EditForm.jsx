import React, { useState } from 'react'

const EditForm = ({ todo, editTodo }) => {
    // 方法1
    const [editContent, setEditContent] = useState(todo.content);

    function editData() {
        // console.log(content.length);

        let myInput = document.getElementById('myInput');
        myInput.focus();  // 指定游標位置
        if (editContent.length === 0) {
            alert('空');
        } else {
            editTodo(todo.id, editContent);
        }

    }
    // 表單送出時
    const handleSubmit = (e) => {
        // 取消送出的預設行為
        e.preventDefault();
        editTodo(todo.id, editContent);
    }

    return (
        <>
            <form className='create-form' /*onSubmit={handleSubmit}*/>
                <input
                    id="myInput"
                    type="text"
                    placeholder='輸入待辦事項'
                    value={editContent}
                    onChange={(e) => {
                        setEditContent(e.target.value.trim());
                        // console.log(e.target.value);
                    }} />
                <button type="button" onClick={editData}>完成</button>
                {/* <button type="submit">完成</button> */}
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

export default EditForm