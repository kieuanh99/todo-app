package angular.todo.crud.controller;

import angular.todo.crud.entity.Todo;
import angular.todo.crud.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
public class TodoController {
    // CRUD = Create - Read - Update - Delete
    @Autowired
    private TodoService service;

    // Create
    @PostMapping("/addTodo")
    public Todo addTodo(@RequestBody Todo todo) {
        // insert into tbl_todo (content) values (<content>)
        return service.saveTodo(todo);
    }

    @PostMapping("/addTodos")
    public List<Todo> addTodos(@RequestBody List<Todo> todos) {
        return service.saveTodos(todos);
    }

    // Read
    @GetMapping("/todos")
    public List<Todo> findAllTodos() {
        // select * from tbl_todo
        return service.getTodos();
    }


    @GetMapping("/todoById/{id}")
    public Todo findTodoById(@PathVariable int id) {
        // select * from tbl_todo where id = <id>
        return service.getTodoById(id);
    }

    @GetMapping("/todoByStatus/{IsCompleted}")
    public List<Todo> findTodoByIsCompleted(@PathVariable int IsCompleted) {
        // select * from tbl_todo where id = <id>
        return service.getTodoByIsCompleted(IsCompleted);
    }

    @GetMapping("/todo/{Content}")
    public Todo findTodoByContent(@PathVariable String Content) {
        // select * from tbl_user where name = <name>
        return service.getTodoByContent(Content);
    }


    // Update
    @PutMapping("/updateTodo")
    public Todo updateTodo(@RequestBody Todo todo) {
        // update tbl_todo set content = <content> where id = <id>
        return service.updateTodo(todo);
    }

    @PutMapping("/updateStatus")
    public Todo updateStatus(@RequestBody Todo todo) {
        // update tbl_todo set isCompleted = <isCompleted> where id = <id>
        return service.updateStatus(todo);
    }

    // Delete
    @DeleteMapping("/deleteTodo/{id}")
    public String deleteTodo(@PathVariable int id) {
        // delete from tbl_todo where id = <id>
        return service.deleteTodo(id);
    }
}
