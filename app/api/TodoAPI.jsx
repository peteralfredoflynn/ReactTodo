var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];

    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // Filter by searchText
    if (searchText.length > 0) {
      searchText = searchText.toLowerCase();
      filteredTodos = filteredTodos.filter((todo) => {
        var lowerCaseText = todo.text.toLowerCase();
        return lowerCaseText.indexOf(searchText) >= 0;
      });
    }
    // Sort todos with non-completed first
    // modifies existing array
    // return -1 if a should come before b, 1 if b should come before a
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};