import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from './todos.service';

@Pipe({
    name: 'todosFilter'
})
export class TodoFilterPipe implements PipeTransform{
    transform(todos: ITodo[], search: string = ''): ITodo[] {
        if(!search.trim()){
            return todos
        }

        return todos.filter( todo => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
    }

}