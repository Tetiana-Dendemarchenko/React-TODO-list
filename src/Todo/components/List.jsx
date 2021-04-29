import React, {Component} from 'react';
import ListItem from "./ListItem";

class List extends Component {
    constructor(props) {
        super(props);

        this.onDeleteItem = this.onDeleteItem.bind(this)
        this.onSwitchItem = this.onSwitchItem.bind(this)
        this.onItemChangeHandler = this.onItemChangeHandler.bind(this)
    }

    onDeleteItem (id) {
        this.props.onChange(this.props.todos.filter(item => item.id !== id))
    }

    onSwitchItem (id) {
        this.props.onChange(this.props.todos.map(item => {
            if (item.id === id) {
                return { ...item, isDone: !item.isDone}
            }

            return item;
        }))
    }

    onItemChangeHandler (id, name) {
        this.props.onChange(this.props.todos.map(item => {
            if (item.id === id) {
                return { ...item, name }
            }

            return item;
        }))
    }

    renderItem (item) {
        return (
            <ListItem
                key={item.id}
                item={item}
                onSwitch={ this.onSwitchItem }
                onDelete={ this.onDeleteItem }
                onItemChange={ this.onItemChangeHandler }
            />
        );
    }

    render() {
        return (
            <div>
                <div>
                    PLANS FOR TODAY:
                    {this.props.todos.map((item) => !item.isDone && this.renderItem(item))}
                </div>
                <hr />
                <div>
                    TASKS THAT HAVE BEEN COMPLETED:
                    {this.props.todos.map((item) => item.isDone && this.renderItem(item))}
                </div>
            </div>
        );
    }
}

export default List;
