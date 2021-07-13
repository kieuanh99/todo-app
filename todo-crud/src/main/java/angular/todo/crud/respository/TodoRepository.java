package angular.todo.crud.respository;

import angular.todo.crud.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo,Integer>  {
    Todo findByContent(String Content);
    List<Todo> findAllByIsCompleted(int IsCompleted);


}
