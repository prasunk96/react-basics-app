import React, { Component } from 'react';

// const InputName = () => {
//     return (
//         <div>
//             <input type="text" />
//             <div>
//                 <button>Submit</button>
//             </div>
//         </div>
//     )
// }

class InputName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    onClickHandler = (event) => {
        event.preventDefault();
        this.props.onUsernameChange(this.state.username);
    }

    inputChange =(event) => {
        this.setState({
            username: event.target.value.toUpperCase()
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.inputChange} type="text" />
                <div>
                    <button onClick={this.onClickHandler} type="button">Submit</button>
                </div>
            </div>
        )
    }
}
export default InputName;