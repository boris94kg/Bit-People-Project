import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    onLikeClick = (e) => {
        this.setState((prevState, props) => {
            const newCount = prevState.likes + 1;

            const newState = {
                likes: newCount

            }
            return newState;
        })
    }


    render() {
        const hearts = [];

        for (let i = 0; i < this.state.likes; i++) {
            hearts.push(
                <span key={i}>
                    &#x2665;
                </span>
            )
        }

        return (
            <>
                <p>Likes: {this.state.likes}</p>
                <input type="button" value="Like" onClick={this.onLikeClick} />
                {/* {() ? <span>{this.state.hearts} </span> : ''} */}
                {hearts}
            </>

        )
    }

}

export default Likes