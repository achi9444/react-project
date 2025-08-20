import { CiEdit } from "react-icons/ci"
import { MdDelete, MdEdit } from "react-icons/md"

const Todo = ({ todo, delTodo, toggleCompleted }) => {

    return (
        <>
            {/* 使用字串值+三元運算子的方法，控制是否套用CSS規則->.completed */}
            <div className={`todo ${todo.isCompleted ? 'completed' : ''} `}>
                <p onClick={() => { toggleCompleted(todo.id) }}> {todo.content}</p>
                <div>
                    <MdEdit
                        style={{ cursor: "pointer", marginRight: "5px" }}
                        onClick={() => { }} />
                    <MdDelete
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            delTodo(todo.id);

                        }}
                    />
                </div>

            </div >
        </>
    )
}

export default Todo