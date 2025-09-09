import React, { useEffect, useState } from 'react'
import Search from '../components/Search-api'
import Picture from '../components/Picture'

const Home = () => {
    // 文字方塊內容
    const [input, setInput] = useState('');
    // 存放資料
    const [data, setData] = useState([]);
    // 目前頁數
    const [page, setPage] = useState(1);
    // 目前查詢的連結內容
    const [curSearch, setCurSearch] = useState('');
    // api key
    const auth = "2OecEpKgEcfcLJBvvGXN62X2y0FaApKKHU1AxBAmCkqCPiMy28FNBICT";
    // 精選照片的連結
    const intialUrl = `https://api.pexels.com/v1/curated?per_page=10&page=1`;
    // 關鍵字搜尋的連結
    const searchUrl = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=15&page=1`;

    // 取得圖庫資料
    const search = async (url) => {
        // 連上api
        const dataFetch = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: auth,
            }
        });
        // 取得資料
        const photosData = await dataFetch.json();
        // console.log(photosData)
        setData(photosData.photos);
        // 更改頁數
        setPage(2);
    }

    // 更多圖片
    const morePic = async () => {
        let newURL;
        if (curSearch === "") {
            newURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
        } else {
            newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=15&page=${page}`;
        }

        // 取資料
        // 連上api
        const dataFetch = await fetch(newURL, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: auth,
            }
        });
        // 取得資料
        const photosData = await dataFetch.json();
        // 傳接陣列資料concat()
        setData(data.concat(photosData.photos));
        // 更改頁數
        setPage(page + 1);
    }
    // 網頁一進來，就呼叫search函式
    useEffect(() => {
        search(intialUrl);
    }, [])

    // curSearch異動時，重新取得圖片
    useEffect(() => {
        if (curSearch === "") {
            // 沒有關鍵字，執行預設連結
            search(intialUrl);
        } else {
            // 有關鍵字，執行有關鍵字的連結
            search(searchUrl);
        }
    }, [curSearch])


    return (
        <div>
            {/* 搜尋列 */}
            <Search
                // 按下search按鈕時，將查詢的關鍵字帶入searchURL後，再執行
                search={() => {
                    setCurSearch(input);
                }}
                // 取得文字方塊內容
                setInput={setInput}
            />
            {/* 顯示圖片 */}
            <div className="pictures">
                {
                    // 檢查data是否有資料
                    data &&  // &&表示有資料
                    data.map((pic) => {
                        return <Picture key={pic.id} data={pic} />
                    })
                }
            </div>
            {/* 更多圖片 */}
            <div className="morePicture">
                <button onClick={morePic}>Load More</button>
            </div>
        </div>
    )
}

export default Home