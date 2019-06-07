import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
// <Sushi />

class SushiContainer extends React.Component {

  showSushi = () => {
    console.log(this.props.sushi)
    return this.props.sushi.map((sushi) => {
      return (
        <Sushi
          name={sushi.name}
          src={sushi.img_url}
          price={sushi.price}
        />
    )
    })
  }

  // handleClickEat={this.handleClickEat}

  render(){
      return (
        <Fragment>
          <div className="belt">
            {this.showSushi()}
            <MoreButton
              handleCraving={this.props.handleCraving}
            />
          </div>
        </Fragment>
      )
  }
}

export default SushiContainer
