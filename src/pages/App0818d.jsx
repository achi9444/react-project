import React, { useState } from 'react'


// 捕捉下拉式方塊內容
const App0818d = () => {
    const [txt, setTxt] = useState('');
    // 建立下拉清單的項目
    const opList = ['HTML', 'CSS', 'JavaScript', 'React'];
    // 建立下拉清單的內容
    const opListValue=['html','css','js','react'];
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2> <hr />
            <p>目前被選取內容：{txt}</p>
            <select name="" id="" value={txt} onChange={(e) => {
                setTxt(e.target.value);
                console.log(e.target.value);
            }}>
                <option value="" disabled>請選擇</option>

                {/* 使用陣列map方法 */}
                {
                    opList.map((item,index)=>{
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }
                {/* <option value="">請選擇</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option> */}

                


            </select>

        </div >
    )
}

export default App0818d