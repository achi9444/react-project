import Employee from "../components/Employee1"


// 建立物件資料
const employees = {
    emp1: {
        name: "員工1",
        age: "27"
    },
    emp2: {
        name: "員工2",
        age: "26"
    },
    emp3: {
        name: "員工3",
        age: "26"
    },
}

// 建立物件資料
const arrEmployees = [
    {
        id: 1,
        name: "員工1",
        age: "27",
        h: 155,
        w: 43,
    },
    {
        id: 2,
        name: "員工2",
        age: "26",
        h: 170,
        w: 90,
    },
    {
        id: 3,
        name: "員工3",
        age: "27",
        h: 178,
        w: 80,
    }
]


const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 呼叫員工元件，使用陣列物件資料:搭配map迴圈 */}
            {
                arrEmployees.map((emp) => {
                    return (
                        <Employee key={emp.id} name={emp.name} age={emp.age} h={emp.h} w={emp.w} />
                    )
                })
            }

            {/* 呼叫員工元件，使用物件資料 */}
            {/* 
            <Employee name={employees.emp1.name} age={employees.emp1.age} />
            <Employee name={employees.emp2.name} age={employees.emp2.age} />
            <Employee name={employees.emp3.name} age={employees.emp3.age} /> 
            */}

            {/* 呼叫員工元件，使用固定值 */}
            {/* 
            <Employee name="員工1" age="21"></Employee>
            也可以寫成 <Employee/> 
            <Employee name="員工2" age="22"></Employee>
            <Employee name="員工3" age="23"></Employee>  
            */}
        </div>
    )
}

export default App;