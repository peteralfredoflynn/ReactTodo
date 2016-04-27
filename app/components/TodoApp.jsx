var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'clean the room'
        },
        {
          id: 3,
          text: 'clean the dog'
        },
        {
          id: 4,
          text: 'watch tv'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('newtodo: ' + text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;