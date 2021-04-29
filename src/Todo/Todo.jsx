import React, {Component} from 'react';

import Form from "./components/Form";
import List from "./components/List";

import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(itemName) {
        const item = {
            id: Date.now(),
            name: itemName,
            isDone: false
        }

        this.setState({
            todos: [...this.state.todos, item]
        });
    }

    render() {
        return (
            <div className='Todo'>
                <Form onSubmit={ this.addItem } />
                <List todos={this.state.todos} onChange={ (todos) => this.setState({ todos })} />
            </div>
        );
    }
}

export default Todo;
