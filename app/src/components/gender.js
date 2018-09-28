import React, {Component} from 'react';

// const Gender = () => {
//     return (
//         <div>
//             <span>Male</span>
//             <input type="checkbox"></input>
//             <span>Female</span>
//             <input type="checkbox"></input>
//             <div>
//                 <button>Submit</button>
//             </div>
//         </div>
//     )
// }

class Gender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: ''
        }
    }
    onClickHandler = (event) => {
        event.preventDefault();
        this.props.onGenderChange(this.state.gender);
    }
    genderChange = (event) => {
        // console.log(event.target.value)
        // console.log(event.target.checked)
        if(event.target.checked===false)
        {
            this.setState({
                gender: ''
            })
        } else {
            this.setState({
                gender: event.target.value.toUpperCase()
            })
        }

    }
    render() {
        return (
            <div>
                <span>Male</span>
                <input type="checkbox" value="male" onClick={this.genderChange}></input>
                <span>Female</span>
                <input type="checkbox" value="female" onClick={this.genderChange}></input>
                <div>
                    <button onClick={this.onClickHandler}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Gender;