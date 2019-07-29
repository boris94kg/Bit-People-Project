import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            hide: false
        }
    }

    onIncrementClick = (e) => {
        this.setState(prevState => {
            const newCount = prevState.counter + 1
            const newState = {
                counter: newCount,
                hide: newCount >= 10
            }

            return newState;
        })
    }

    render() {
        return (
            <>
                <p>{this.state.counter}</p>
                {this.state.hide ? null : <button onClick={this.onIncrementClick}>Increment</button>}

            </>
        )
    }

}


export default Counter