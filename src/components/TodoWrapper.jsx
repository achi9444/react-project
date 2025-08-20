import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

const TodoWrapper = () => {
    // 因為有n個todo，所以要用陣列存取
    // const [todos, setTodos] = useState(["繳停車費", "對發票"])
    // 因為陣列內容若有增減，索引值會異動，
    // 所以避免異動時造成索引值錯亂，將陣列改為陣列物件
    // key值用亂數來產生

    const [todos, setTodos] = useState(
        [
            {
                content: "繳停車費",
                id: Math.random(),
                isCompleted: false
            },
            {
                content: "對發票",
                id: Math.random(),
                isCompleted: false
            },
        ]
    )

    // 建立刪除todo，傳入被刪除todo.id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不是被刪除的id
            return todo.id !== id
        }))
    }

    // 建立切換isCompleted屬性函式
    // isCompleted=>false
    // isCompleted=>true
    const toggleCompleted = (id) => {
        // 檢查被點擊項目的id是否與陣列中的id相同
        // yes=>1.取出todo 2.將isCompleted屬性值反向(not)
        // no=>todo不變

        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }




    return (
        <>
            <div className='wrapper'>
                <h1>待辦事項</h1>
                {/* 方法1 */}
                <CreateForm todos={todos} setTodos={setTodos} />

                {/* 方法2
                <CreateForm addTodo={(newContent) => {
                    // 建立新的todo內容，使用其餘運算子...保留原陣列內容，再加上新的物件內容
                    setTodos([...todos,{ content: newContent, id: Math.random(),isCompleted:false }])
                }} /> */}

                {
                    todos.map((todo) => {
                        return (
                            <Todo todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted} />
                        )
                    })
                }

            </div>
        </>
    )
}

export default TodoWrapper