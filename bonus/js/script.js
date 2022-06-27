// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
// (se done era uguale a false, impostare true e viceversa)

var app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        },
        methods: {
            removeTodo(indexTodo) {
                this.todos.splice(indexTodo, 1);
            },
            addNewTodo() {
                const newTodoObject = {
                    text: this.newTodo,
                    done: false
                };
                this.todos.push(newTodoObject);
                this.newTodo = '';
            }
        }
    }
)