import React from 'react'
import './App.css'
import { Grid, Header, Card, Form, Input, Button } from 'semantic-ui-react'
import TodoItem from './TodoItem'
import todosData from '../todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todosData,
      isLoggedIn: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.logInOut = this.logInOut.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todosData.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      return { todosData: updatedTodos }
    })
  }

  logInOut() {
    this.setState(prevState => {
      return (prevState.isLoggedIn = !prevState.isLoggedIn)
    })
  }

  render() {
    const todoItems = this.state.todosData.map(item => {
      return (
        <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
      )
    })
    return (
      <Grid
        columns='three'
        style={{
          height: '100vh'
        }}
        verticalAlign='middle'
      >
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Header as='h2' color='teal' textAlign='center'>
              ToDo list
            </Header>
            <Card id='myCard' centered>
              <Form>
                <Form.Field>
                  <Input action='Add' placeholder='Task' />
                </Form.Field>
                {todoItems}
              </Form>
              {this.state.isLoggedIn && <h3>You are logged in</h3>}
              <Button onClick={this.logInOut}>
                {this.state.isLoggedIn ? 'Log Out' : 'Log In'}
              </Button>
            </Card>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App
