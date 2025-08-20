import React, { useState } from 'react'



const App0819c = () => {
    const [curImg, setCurImg] = useState(0);
    const arrPhotos = [
        { imgName: "./photo/p1.jpg" },
        { imgName: "./photo/p3.jpg" },
        { imgName: "./photo/p5.jpg" },
        { imgName: "./photo/p7.jpg" },


    ]
    return (
        <>
            <h1>小圖換大圖</h1><hr />
            <div>
                {/* <img src="./photo/p1.jpg" alt="" width={120} height={80} style={{ cursor: "pointer" }} />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" /> */}
                {
                    arrPhotos.map((photo, index) => {
                        // console.log(photo)
                        return (
                            <img
                                key={index}
                                src={photo.imgName}
                                alt=""
                                width={120}
                                height={80}
                                style={{ cursor: "pointer" }}
                                // 左鍵點一下才換
                                onClick={() => {
                                    setCurImg(index);
                                    let showPic = document.querySelector('#showPic');
                                    showPic.style.display = "block";
                                }}
                            // onMouseOver={() => { setCurImg(index) }}
                            // 滑鼠離開縮圖後要還原預設才要寫
                            // onMouseOut={() => {
                            //     setCurImg(0)
                            // }}
                            />
                        )
                    })
                }
            </div>
            <div>
                {/* <img src="./photo/p1.jpg" alt="" width={420} height={280} /> */}
                <img src={arrPhotos[curImg].imgName} alt="" width={420} height={280} style={{ display: "none" }} />
            </div>
        </>
    )
}

export default App0819c