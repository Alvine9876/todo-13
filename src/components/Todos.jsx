import React from "react";

const Todos = ({ todos, setTodos }) => {

    const handleDelete = (id) => {
        let newArray = todos.filter((todo) => id !== todo.id);
        setTodos(newArray);
        console.log(newArray);
    }

    if (todos.length === 0) {
        return <p>No todos for today</p>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>id: {todo.id}</span>
                    <span> body: {todo.body}</span>
                    <button onClick={() => handleDelete(todo.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Todos;
