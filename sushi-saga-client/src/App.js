import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi:[],
    start:0,
    end:4,
    money: 250
  }

  componentDidMount() {
    // console.log("component has loaded")
    fetch(API)
    .then(res => res.json())
    .then( data => {
      this.setState({
        sushi:data
      })
    })

  }

  moarSushi = () => {
    console.log("MOREEE")
    this.setState({
      start: this.state.start + 5,
      end: this.state.end + 5
    })
  }

  render() {

    return (
      <div className="app">

        <SushiContainer
          sushi={this.state.sushi.slice(this.state.start , this.state.end)}
          handleClickEat={this.handleClickEat}
          handleCraving={this.moarSushi}
        />

      <Table money={this.state.money} />
      </div>
    );
  }
}

export default App;
