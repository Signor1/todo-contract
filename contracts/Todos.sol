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

    //event to track updates on todos
    event checkIfUpdated(MyTodoList index, string title);

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

    //Update Description
    function updateTodoDesc(string memory _description, uint256 _index) external {
        require(_index <= todoLists.length, "You entered an incorrect value");

        MyTodoList storage mylistOfTodo = todoLists[_index];
        mylistOfTodo.description = _description;
    }

    //toggle todo item's status
    function updateTodoStatus(uint256 _index) external {
        require(_index <= todoLists.length, "You entered an incorrect value");
        todoLists[_index].isDone = !todoLists[_index].isDone;
    }

     //reading a todoitem by index
    function getTodoItem(uint256 _index) external view returns (MyTodoList memory) {
        require(_index <= todoLists.length, "You entered an incorrect value");

        return todoLists[_index];
    }

    //reading the todos
    function getTodos() external view returns (MyTodoList[] memory) {
        return todoLists;
    }

    //method for getting the length
    function getTodoLen() external view returns (uint){
        return todoLists.length;
    }

    //remove
    function removeTodoItem(uint256 _index) external {
        require(_index < todoLists.length, "You entered an incorrect value");
        todoLists[_index] = todoLists[todoLists.length - 1];
        todoLists.pop();
    }
}