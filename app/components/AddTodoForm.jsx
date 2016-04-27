var React = require('react');

var AddTodoForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var todo = this.refs.todo.value;
    if (todo.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
    } else {
      // puts cursor back in input automatically
      this.refs.todo.focus();
    }
    
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="What ya got to do?" />
          <button className="button hollow expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodoForm;