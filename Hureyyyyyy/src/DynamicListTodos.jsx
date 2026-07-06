import { useState } from "react"
import "./DynamicListTodos.css"

export const DynamicListTodos = () => {
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                todo: "Practice React",
                date: "06-28-2026",
                completed: false,
            }
        ]
    )
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [complete, setComplete] = useState(false)
    let handleTitleChange = (event) => setTitle(event.target.value)
    let handleDateChange = (event) => setDate(event.target.value)
    let handleCompleteChange = (event) => setComplete(event.target.checked)
    let handleFormSubmit = (event) => {
        // vvip: to prevent default behaviour of html form i.e. reloading when sumbitting form
        event.preventDefault()
        console.log("form submit call")
        if (editTodo == null) {
            // add todo
            let prepareTodos = [...todos, {
                id: todos.length + 1,
                todo: title,
                date: date,
                completed: complete,
            }]
            setTodos(prepareTodos)
            alert(`new todo : ${title} has been added successfully`)
        } else {
            // edit todo
            let matchedTodo = todos.find((td) => {
                return td.id === editTodo.id
            })
            matchedTodo.todo = title
            matchedTodo.date = date
            matchedTodo.completed = complete
            setTodos([...todos])
        }
        resetFormField()
    }
    let resetFormField = () => {
        setTitle("")
        setDate("")
        setComplete(false)
        setEditTodo(null)
    }
    let handleDeleteTodo = (id) => {
        let shouldDelete = window.confirm("Would you like to delete this todo?")
        if (shouldDelete) {
            let matchedTodoIndex = todos.findIndex((t) => {
                return t.id === id
            })
            // deleting element from array
            todos.splice(matchedTodoIndex, 1)
            setTodos([...todos])
            alert("deleted successfully")
        } else {
            alert("delete cancelled by user")
        }
    }
    let [editTodo, setEditTodo] = useState(null)
    const handleEditTodo = (td) => {
        console.log(td)
        setEditTodo(td)
        setTitle(td.todo)
        setDate(td.date)
        setComplete(td.completed)
    }
    return (
        <div className="todo-container">
            <form onSubmit={handleFormSubmit}>
                <div className="todo-form">
                    <label htmlFor="todo-title">
                        Todo Title:
                        <input value={title} onChange={handleTitleChange} id="todo-title" type="text" placeholder="Enter todo title" />
                    </label>
                    <label htmlFor="todo-date">
                        Date:
                        <input value={date} onChange={handleDateChange} id="todo-date" type="date" placeholder="Pick date" />
                    </label>
                    <label htmlFor="todo-status">
                        <input checked={complete} onChange={handleCompleteChange} id="todo-status" type="checkbox" />
                        Completed
                    </label>
                    {
                        editTodo != null ? <button type="sumbit">Edit Todo</button> : <button type="sumbit">Add Todo</button>
                    }
                </div>
            </form>
            <h4>My All Todos</h4>
            <div className="todo-list">
                {
                    todos.map(
                        (ele) => {
                            return (
                                <div className="todo-card" key={`${ele.id}-${ele.todo}`} >
                                    <h6>{ele.todo}</h6>
                                    <p>Date: {ele.date}</p>
                                    <b>Completed: {ele.completed ? "True" : "False"}</b>
                                    <br />
                                    <button onClick={() => handleEditTodo(ele)}>Edit</button>
                                    <button onClick={() => handleDeleteTodo(ele.id)}>Delete</button>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}   