import { IoIosUmbrella } from "react-icons/io";
import '../css/App0811-weather.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
    // 建立一個react變數，使用useState Hook
    // 存放各縣市資料
    //const [變數名稱, 更改變數名稱的方法] = useState(預設值);
    const [citys, setCitys] = useState([]);
    // useEffect Hook=>渲染後，只呼叫一次json
    // 取得渲染後的DOM元素，要寫在useEffect
    useEffect(() => {

        // 非同步取資料
        (async () => {
            // 取得public中的json檔
            const jsonData = await axios.get('./json/F-C0032-001.json');
            // 取得src中的json
            // const data = await axios.get('./src/json/F-C0032-001.json')

            // 檢查是否連上json
            // console.log(jsonData.data.cwaopendata.dataset);

            // 取得各縣市的氣象資訊(從json中解構出來)
            const { location } = jsonData.data.cwaopendata.dataset;
            // console.log(location);

            // 將各縣市資訊透過setCitys方法，更新citys
            setCitys(location);
        })();
    }, []);

    // <CardBody item={item} index={index} title={title} wx={wx} pop={pop} />
    // 卡片內容
    // const CardBody = ({ item, city, index }) => {
    const CardBody = ({ item, index, pop }) => {
        return (
            <>
                <div className="date">
                    {/* 11日 */}
                    {/* 使用日期時間函式 toLocalString() */}
                    {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString */}
                    {
                        new Date(item.startTime).toLocaleString(undefined, {
                            day: "numeric"
                        })
                    }
                </div>
                <div className="time">
                    {/* 上午6:00 <br />~ <br />下午6:00 */}
                    {
                        new Date(item.startTime).toLocaleString(undefined, {
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }
                    <br />~ <br />
                    {
                        new Date(item.endTime).toLocaleString(undefined, {
                            hour: "numeric",
                            minute: "numeric"
                        })
                    }
                </div>
                {/* 天氣圖 */}
                <div className='weatherPic'>
                    {/* 使用執行路徑，把圖片放到public */}
                    {/* <img src='./weatherIcon/晴午後多雲短暫陣雨.svg' alt="" /> */}
                    <img style={{ width: "95px", height: "95px" }} src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                </div>
                {/* 天氣名稱 */}
                <div className='weatherName'>
                    {/* 晴午後短暫雷陣雨 */}
                    {
                        item.parameter.parameterName
                    }
                </div>
                {/* 降雨率pop */}
                <div className='pop'>
                    <IoIosUmbrella />
                    {/* 80% */}
                    {
                        `${pop.time[index].parameter.parameterName}%`
                    }
                </div>
            </>
        )
    }


    // 卡片元件
    // function Card({ city }) {
    function Card({ title, wx, pop }) {
        return (
            <div>
                {/* 取得縣市陣列跑迴圈 */}
                <div className="card">
                    <div className='cardHeader'>
                        {/* 臺北市 */}
                        {title}
                    </div>
                    {/* 卡片內容 */}
                    <div className='cardBody'>
                        {/* 取得陣列資料後跑迴圈 */}
                        {/* 縣市各縣市的3個欄位資訊 */}
                        {
                            wx.time.map((item, index) => {
                                return (
                                    <div className='item' key={index}>
                                        <CardBody item={item} index={index} pop={pop} />
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }

    return (
        <>

            <h2>36小時天氣預報</h2>
            {/* Wx天氣現象、MaxT最高溫度、MinT最低溫度、CI舒適度、PoP降雨機率 */}
            <div className='cards'>
                {
                    citys.map((city) => {
                        return (
                            // 呼叫元件 - 建立屬性{設定值}
                            // <Card city={city} key={city.locationName} />
                            <Card key={city.locationName} title={city.locationName} wx={city.weatherElement[0]} pop={city.weatherElement[4]} />
                        )
                    })
                }


            </div>
        </>
    )
}

export default App