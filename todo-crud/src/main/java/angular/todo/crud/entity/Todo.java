package angular.todo.crud.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_todo")
public class Todo {
    @Id
    @GeneratedValue
    private int id;
    private String content;
    private int isCompleted;
}
