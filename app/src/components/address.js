import React, {Component} from 'react';

// const Address = () => {
//     return (
//         <div>
//             <textarea></textarea>
//             <div>
//                 <button>Submit</button>
//             </div>
//         </div>
//     )
// }

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        }
    }
    inputChange = (event) => {
        this.setState({
            address: event.target.value.toUpperCase()
        })
    }
    onClickHandler = (event) => {
        event.preventDefault();
        this.props.onAddressChange(this.state.address)
    }
    render() {
        return (
            <div>
                <textarea onChange={this.inputChange}></textarea>
                <div>
                    <button onClick={this.onClickHandler}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Address;