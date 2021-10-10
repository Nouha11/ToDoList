import React from 'react'
import {Button} from 'react-bootstrap';

const Form = ({setInputText, todos, setTodos, inputText}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        
    };

    const submitTodoHandler = (e) => {
        if(inputText !== ""){
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed:false, id:Math.random() * 1000}
        ]);
        setInputText("");}
        else {
            e.preventDefault();
        }
    };

    return(
        <form>
           <input value={inputText} onChange={inputTextHandler} type="text"></input>
           <Button onClick={submitTodoHandler} variant="outline-success" className="todo-button" type="submit" >Add</Button>{' '}
        </form>
    );
}

export default Form;
