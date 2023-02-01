import React from "react";


interface IItem{
    id: string,
    title:string
}

interface IProps{
    todos:IItem[]
}


const TodoList: React.FC<IProps> = (props) => {
    return (
        <ul>
            {props.todos.map((item) => {
                return <li key={item.id}>
                    <div>{ item.id}</div>
                    <div>{ item.title}</div>
                </li>
            })}
        </ul>
    )
}



export default TodoList