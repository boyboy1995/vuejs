var app = new Vue({
  el: '#app',
  data: {
    message: 'This Is Vue Todo App',
    someLink: 'http://www.google.com/doodle',
    todoInput: '',
    todos: [
      { title: 'Todo  1'},
      { title: 'Todo  2'},
      { title: 'Todo  3'},
      { title: 'Todo  4'},
      { title: 'Todo  5'}

    ],
    showTodos: true,
    count: 1

  },
  methods: {
     createNewList: function () {
       var todoInput = this.todoInput.trim(); // trim avoids space
       if(todoInput){
         this.todos.push({ title: todoInput});
         this.todoInput = '';
       }
    },

    clearTodo: function () {
      this.todoInput = '';     // kinda useless, just to show esc button usage
    },

    upCount: function (){
      this.count = this.count + 1;

    },

    removeTodo: function (index){
      this.todos.splice(index, 1); //splice allows to delete element in an array

    }
  }
});
