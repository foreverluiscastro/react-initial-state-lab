// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // decrement = () => {
    //     this.setState({
    //         secondsLeft: this.state.initialCount - 1
    //     })
    // }

    render() {
        const countDown = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>
                <h2>{countDown}</h2>
            </div>
        )
    }
}
