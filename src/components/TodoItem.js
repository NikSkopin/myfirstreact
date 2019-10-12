import React from 'react'
import { Form } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      textDecoration: 'line-through'
    }
    return (
      <Form.Field>
        <Checkbox
          label={this.props.item.text}
          onChange={() => this.props.handleChange(this.props.item.id)}
          checked={this.props.item.completed}
          style={this.props.item.completed ? completedStyle : null}
        />
      </Form.Field>
    )
  }
}

export default TodoItem
