import React, { Component } from 'react';
import InputName from '../components/inputName';
import Address from '../components/address';
import Gender from '../components/gender';
import Output from '../components/output';
import ConditionalRender from '../components/conditionaRendering';

// const Form = () => {
//     return (
//         <div>
//             <form>
//                 <label>Username</label>
//                 <InputName />
//                 <lable>Address</lable>
//                 <Address />
//                 <label>Gender</label>
//                 <Gender />
//                 <div>
//                     <Output />
//                 </div>
//             </form>
//         </div>
//     )
// }

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            username: '',
            address: '',
            gender: '',
            isLoaded: false,
            todo: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                todo: result.title
            })
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        }
    )
    }
    handleUsernameChange = (newUsername) => {
        this.setState({
            username: newUsername
        })
    }
    handleAddressChange = (newAddress) => {
        this.setState({
            address: newAddress
        })
    }
    handleGenderChange = (newGender) => {
        this.setState({
            gender: newGender
        })
    }
    handleConditionlRendering = () => {
        this.setState({
            username: '',
            address: '',
            gender: ''
        })
    }
    render() {
        const {error, isLoaded, todo} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (this.state.username==='PRASUN' || this.state.username==='') ? ( 
                (
                    <div>
                        <form>
                            <span>Username</span>
                            <InputName onUsernameChange={this.handleUsernameChange}/>
                            <span>Address</span>
                            <Address onAddressChange={this.handleAddressChange}/>
                            <span>Gender</span>
                            <Gender onGenderChange={this.handleGenderChange}/>
                            <div>
                                <Output userData={this.state}></Output>
                            </div>
                        </form>
                    </div>
                )   
            ) : (
                    <div>
                        <ConditionalRender></ConditionalRender>
                    </div>
                )

        }
    }
}

export default Form;