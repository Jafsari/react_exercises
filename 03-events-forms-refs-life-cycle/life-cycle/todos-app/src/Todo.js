import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";
import TodoForm from "./TodoForm";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(updatedTodo) {
    this.props.handleEdit(updatedTodo);
  }

  render() {
    let {
      isComplete,
      title,
      description,
      handleDelete,
      isShowingEditForm,
      toggleComplete,
      toggleEditForm
    } = this.props;
    let complete = isComplete ? "complete" : "";
    let buttonText = isComplete ? "incomplete" : "complete";
    let editForm = isShowingEditForm ? (
      <TodoForm
        title={title}
        description={description}
        handleSubmit={this.handleEdit}
      />
    ) : null;

    return (
      <div className={`Todo ${complete}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button-wrapper">
          <button className="complete-button" onClick={toggleComplete}>
            Mark as {buttonText}
          </button>
          <button className="remove-button" onClick={handleDelete}>
            Delete this todo
          </button>
          <button className="edit-button" onClick={toggleEditForm}>
            Edit this todo
          </button>
          {editForm}
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  isShowingEditForm: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleEditForm: PropTypes.func.isRequired
};

Todo.defaultProps = {
  title: "",
  description: "",
  isComplete: false,
  isShowingEditForm: false
};
