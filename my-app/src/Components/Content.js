import React, { Component } from 'react'
import List from './List';
import Form from './Form';

class Content extends Component {

    constructor() {
        super();
        this.addcontent = this.addcontent.bind(this)
    }

    state = {
        users: [
            {
                name: "Nurmuhammad",
                phone: 88888888
            },
            {
                name: "Firdavs",
                phone: 90909090
            },
            {
                name: "Doston",
                phone: 96969696
            }
        ]
    };


    addcontent(content) {
        const { users } = this.state;
        users.push(content);
        this.setState({
            users
        }

        )
    }

    render() {
        return (

            <div className='contact'>
                <List users={this.state.users} />
                <Form addcontent={this.addcontent} />

            </div>

        );
    }
}

export default Content;