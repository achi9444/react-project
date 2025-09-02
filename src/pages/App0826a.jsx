import $ from "jquery"
import { useEffect } from "react"
import '../css/App0826a.css'

const App = () => {

    useEffect(()=>{
        // 當滑鼠碰到圖片時，放大圖片
        $('.zoom').on('mouseover', function () {
            $(this).addClass('imgScale');
        })
    
        // 當滑鼠離開圖片時，還原圖片
        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    },[])

    return (

        <div>
            <h1>useEffect</h1>
            <h2>jquery-圖片縮放</h2>
            <a href="#" className="zoom"
            >
                <img src="./photo/p3.jpg" alt=""
                />
            </a>
        </div>
    )
}

export default App