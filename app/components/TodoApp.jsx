var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

//var TodoList = require('TodoList');
import TodoList from 'TodoList';
//var AddTodoForm = require('AddTodoForm');
import AddTodoForm from 'AddTodoForm';
//var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  // getInitialState: function() {
  //   return {
  //     showCompleted: false,
  //     searchText: '',
  //     todos: TodoAPI.getTodos()
  //   };
  // },
  // componentDidUpdate: function() {
  //   TodoAPI.setTodos(this.state.todos);
  // },
  // handleAddTodo: function(text) {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   })
  // },
  // handleSearch: function(showCompleted, searchText) {
  //   this.setState({
  //     showCompleted: showCompleted,
  //     searchText: searchText.toLowerCase()
  //   });
  // },
  render: function() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodoForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;