import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, onToDoClick}) => {
    <ul>
        {todos.map((todo, index) => {
            <Todo key={index} {...todo} onClick={() => { onToDoClick(index)}} />
        })}
    </ul>
}

export default TodoList;