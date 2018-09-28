import React from 'react';

const Output = (props) => { 
    const addr = props.userData.address.split(",");
    const listItem = addr.map((item, index) => <li key={index}>{item}</li>
    );
    return (
        <div>
            <h2>Username:{props.userData.username}</h2>
            <h2>Address:{listItem}</h2>
            <h2>Gender:{props.userData.gender}</h2>
            <h2>Todos:{props.userData.todo}</h2>
        </div>
    )
}

export default Output;