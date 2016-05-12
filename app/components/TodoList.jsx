var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function() {
    //because wel connected state
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        )
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        // spread operator to pass all props 
        return <Todo key={todo.id} {...todo} />
      });
    };
    
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});


//connect to TodoList
export default connect(
  (state) => {
    return state;
  }
)(TodoList);