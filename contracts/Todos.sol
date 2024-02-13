// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Todos {

    //struct
    struct MyTodoList {
        string title;
        string description;
        bool isDone;
    }

     //array
    MyTodoList[] todoLists;

    //CRUD

    //create method
    function addTodoItem(string memory _title, string memory _description) external {
        todoLists.push(
            MyTodoList({
                title: _title,
                description: _description,
                isDone: false
            })
        );
    }

    //Update title
    function updateTodoTitle(string memory _title, uint256 _index) external {
        require(_index <= todoLists.length, "You entered an incorrect value");
        
        MyTodoList storage mylistOfTodo = todoLists[_index];
        mylistOfTodo.title = _title;
    }
}