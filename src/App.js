import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

// because App currently is a functional component, we cannot store a state object here
// firstly, we need to convert it to a Class Component

class App extends Component {
  state = {
    selected: undefined,
  }

  // the only way of changing a component's state is using setState
  // and if we want to change the state of App with setState, we need
  // to call it from the App component!

  changeAppState = (newValue) => {
    this.setState({
      selected: newValue,
    })
  }

  // changeAppState is a function capable of changing the state of App
  // I'm passing it down as a prop to Table, so Table can invoke it!
  // Table will invoke this.props.changeAppState() with the new selected value
  // in this way, App's state is able to change from Table!

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  // table will need to READ the value of selected from App's state
                  selected={this.state.selected}
                  changeAppState={this.changeAppState}
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
