const App = () => {
    const arrCitys = [
        {
            cityId: 1,
            cityName: "臺北市"
        },
        {
            cityId: 2,
            cityName: "新北市"
        },
    ]

    return (
        <>
            <div>
                <h1>Local storage 陣列物件資料存取</h1>
                <button onClick={() => {
                    // 陣列物件轉字串
                    let strCity = JSON.stringify(arrCitys)
                    // 寫入local storage
                    window.localStorage.setItem('citys', strCity)
                }}>寫入</button>

                <button onClick={() => {
                    // 取出local storage資料
                    let getData = window.localStorage.getItem('citys');
                    // 字串轉陣列物件
                    let getArrData = JSON.parse(getData);
                    console.log(getArrData);
                }}>讀取</button>
            </div>
        </>
    )
}

export default App