import React, {Component} from 'react';
import * as PropTypes from "prop-types";

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: ''
        }

        this.taskName = React.createRef();

        this.handleNameChange = this.handleNameChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleNameChange (event) {
        this.setState({
            taskName: event.target.value
        });
    }

    addItem (event) {
        event.preventDefault();
        this.setState({
            taskName: ''
        });
        this.taskName.current.focus();
        this.props.onSubmit(this.state.taskName);
    }

    render() {
        return (
            <form id='todo-form' onSubmit={this.addItem}>
                <input type='text' placeholder='Please, Create a Task!'
                       value={ this.state.taskName }
                       onChange={ this.handleNameChange }
                       ref={ this.taskName }
                />
                <button id='todo-form-button' type='submit'>Add Task</button>
            </form>
        );
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func
}

export default Form;
