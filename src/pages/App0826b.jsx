import { useEffect, useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";



// import '../css/App0826b.css'


const App = () => {
    // 預設為第一張圖
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: "./photo/p3.jpg", title: "photo1" },
        { url: "./photo/p5.jpg", title: "photo2" },
        { url: "./photo/p7.jpg", title: "photo3" },
        { url: "./photo/p9.jpg", title: "photo4" },
    ]

    // 當currentIndex改變時，觸發
    useEffect(() => {
        // 每3秒呼叫nextSlide()換下一張
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);
        // 每3秒後，移除autoplay，取得新的索引值
        return () => clearInterval(autoplay);
    }, [currentIndex]);

    // 下一張
    const nextSlide = () => {
        // 取得前一張的索引編號，檢查是否為最後一個編號
        // 是=>回到第一張
        // 否=>跳到下一張
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1
                ? 0
                : prevIndex + 1
        )
    }

    // 上一張
    const prevSlide = () => {
        // 切換目前圖片的索引位置
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? slides.length - 1
                : prevIndex - 1
        )
    }



    // 按鈕列
    const Arrow = ({ direction, onClick }) => {
        return (
            <div style={{
                position: 'absolute',
                top: '50%',
                cursor: 'pointer',
                color: '#FFF',
                [direction]: '20px'  // 將icon拆開，並調整左右留白
            }}>
                {
                    direction === "left"
                        ? (
                            // 左按鈕
                            <IoMdArrowDropleft size={50} onClick={onClick} />
                        )
                        : (
                            // 右按鈕
                            <IoMdArrowDropright size={50} onClick={onClick} />
                        )
                }
            </div>
        )
    }
    return (
        // 滿版外層
        <><div className="wrap"
            style={{
                maxWidth: "100vw",
                height: "100vh",
                margin: "auto"
            }}>
            <div className='slideImg' style={{
                backgroundImage: `url(${slides[currentIndex].url})`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                margin: "auto"
            }}>
                {/* 顯示圖片區 */}
                <div>
                    <h2 style={{ color: "red" }}>{slides[currentIndex].title}</h2>
                    {/* 左 */}
                    <Arrow direction="left" onClick={prevSlide} />
                    {/* 右 */}
                    <Arrow direction="right" onClick={nextSlide} />
                </div>
            </div>
        </div >
        </>
    )
}

export default App