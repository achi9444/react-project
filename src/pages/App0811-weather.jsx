import axios from 'axios';
import '../css/App0811-weather.css'
import { IoIosUmbrella } from "react-icons/io";
import { useEffect } from 'react';


const App = () => {
    // useEffect渲染後，只呼叫一次
    useEffect(() => {
        // 非同步取資料
        (async () => {
            // 取得public中的json檔
            const data = await axios.get('./json/F-C0032-001.json')
            // 取得src中的json
            // const data = await axios.get('./src/json/F-C0032-001.json')

            // 檢查是否連上json
            console.log(data.data.cwaopendata.dataset);
        })();
    }, []);
    return (
        <>
            <h2>36小時天氣預報</h2>
            <div className='cards'>
                {/* 取得縣市陣列 */}
                <div className="card">
                    <div className='cardHeader'>
                        臺北市
                    </div>
                    {/* 卡片內容 */}
                    <div className='cardBody'>
                        {/* 取得陣列資料後跑迴圈 */}
                        <div className='item'>
                            <div className="date">
                                11日
                            </div>
                            <div className="time">
                                上午6:00 <br />~ <br />下午6:00
                            </div>
                            {/* 天氣圖 */}
                            <div className='weatherPic'>
                                {/* 使用執行路徑，把圖片放到public */}
                                <img src='./weatherIcon/晴午後多雲短暫陣雨.svg' alt="" />
                            </div>
                            {/* 天氣名稱 */}
                            <div className='weatherName'>
                                晴午後短暫雷陣雨
                            </div>
                            {/* 降雨率pop */}
                            <div className='pop'>
                                <IoIosUmbrella /> 80%
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default App