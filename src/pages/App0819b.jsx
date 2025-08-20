// 次元件
function SecondComponent({ c }) {
    // console.log(props)
    return (
        <>
            <h1>我是secondComponent元件</h1>
            <p>secondComponent接收的屬性是：{c}</p>
        </>
    )
}
function MyComponent2({ b }) {
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto saepe illo, qui culpa eveniet voluptatem ab! Officia, odio qui id expedita minus aliquam corrupti tenetur nesciunt officiis sed repellendus laboriosam?</p>
            <SecondComponent c={b} />
            我是：{b}
        </>
    )
}

// 子元件接收主元件的元件
function MyComponent({ a, children }) {
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto saepe illo, qui culpa eveniet voluptatem ab! Officia, odio qui id expedita minus aliquam corrupti tenetur nesciunt officiis sed repellendus laboriosam?</p>
            {children}
            我是：{a}
        </>
    )
}

const App0819b = () => {
    return (
        <div>
            <h1>元件之間傳遞元件 <hr /></h1>
            {/* 比較進階的方法 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性a" />
            </MyComponent>

            <hr />
            {/* 基礎，逐層各自呼叫 */}
            <MyComponent2 b="屬性b" />
        </div>
    )
}

export default App0819b