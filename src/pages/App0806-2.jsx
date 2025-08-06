import '../css/App0806-1.css'
import Card from '../components/Card';
// const Photo = (imgURL, title, desc, btnName, btnURL) => {

//     )
// }


const arrPhotos = [
    {
        id: 1,
        imgURL: 'https://images.unsplash.com/photo-1583599507487-eea43bae3604?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '楓樹！',
        desc: "漂亮~~~",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1583599507487-eea43bae3604?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        imgURL: 'https://images.unsplash.com/photo-1521127384671-426ebca2ba76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
        title: '是楓樹！',
        desc: '超漂亮~~~',
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1521127384671-426ebca2ba76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"'
    },
    {
        id: 3,
        imgURL: 'https://s.yimg.com/ny/api/res/1.2/i9odqtn9VDYqfHqHXJgG7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyNTtjZj13ZWJw/https://media.zenfs.com/ko/entertainment.nownews.hk/de2f2204ccc8e08db6e35a266c2909e8',
        title: '是阿信！！',
        desc: '阿~~~~',
        btnName: '圖片來源',
        btnURL: 'https://s.yimg.com/ny/api/res/1.2/i9odqtn9VDYqfHqHXJgG7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyNTtjZj13ZWJw/https://media.zenfs.com/ko/entertainment.nownews.hk/de2f2204ccc8e08db6e35a266c2909e8'
    },]










// const App = () => {
//     // 資料抽離
//     const photos = {
//         photo1: {
//             imgURL: 'https://images.unsplash.com/photo-1583599507487-eea43bae3604?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             title: '楓樹！',
//             desc: "漂亮~~~",
//             btnName: '圖片來源',
//             btnURL: 'https://images.unsplash.com/photo-1583599507487-eea43bae3604?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//         },
//         photo2: {
//             imgURL: 'https://images.unsplash.com/photo-1521127384671-426ebca2ba76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
//             title: '是楓樹！',
//             desc: '超漂亮~~~',
//             btnName: '圖片來源',
//             btnURL: 'https://images.unsplash.com/photo-1521127384671-426ebca2ba76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"'
//         },
//         photo3: {
//             imgURL: 'https://s.yimg.com/ny/api/res/1.2/i9odqtn9VDYqfHqHXJgG7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyNTtjZj13ZWJw/https://media.zenfs.com/ko/entertainment.nownews.hk/de2f2204ccc8e08db6e35a266c2909e8',
//             title: '是阿信！！',
//             desc: '阿~~~~',
//             btnName: '圖片來源',
//             btnURL: 'https://s.yimg.com/ny/api/res/1.2/i9odqtn9VDYqfHqHXJgG7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyNTtjZj13ZWJw/https://media.zenfs.com/ko/entertainment.nownews.hk/de2f2204ccc8e08db6e35a266c2909e8'
//         },
//     }

// }
const App = () => {
    return (
        <>
            <div className='container'>
                { 
                    arrPhotos.map((photo) => {
                        return (
                            <Card key={photo.id} imgURL={photo.imgURL} title={photo.title} desc={photo.desc} btnName={photo.btnName} btnURL={photo.btnURL} />
                        )
                    })
                }
            </div>
        </>
    )

}
export default App;