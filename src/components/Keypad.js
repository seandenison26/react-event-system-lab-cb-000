import React from 'react'

export default class Keypad extends React.Component {
  enter = () => {
    console.log('Entering password...')
  }

  render() {
    return  <input onKeyUp={this.enter} type="password"></input>

  }
}
