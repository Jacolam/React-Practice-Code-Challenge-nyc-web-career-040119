import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleClickEat = () => {
    this.setState({
      eaten: true
    })
  }

render(){

    return (
      <div className="sushi">
        {console.log(`rerendering`)}
        <div className="plate"
             onClick={this.handleClickEat}>
          {this.state.eaten ? (
            <img  width="100%" />
          ) : (
            <img src={this.props.src} width="100%" />
          ) }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
