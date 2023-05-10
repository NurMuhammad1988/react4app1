import React, { Component } from 'react'
import List from './List';
import Form from './Form';
// import './App.css'


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
            },

            {
                name: "Samshid",
                phone: 98989898
            },

            {
                name: "Sahtiyor",
                phone: 23232323
            },

            {
                name: "Silshod",
                phone: 23232323
            },

            {
                name: "Inom",
                phone: 23232323
            },

            {
                name: "Ichqun",
                phone: 23232323
            },

            {
                name: "Iosim",
                phone: 23232323
            },

            {
                name: "Vali",
                phone: 23232323
            },

            {
                name: "Hurshid",
                phone: 23232323
            },

            {
                name: "Sherzod",
                phone: 23232323
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

            <div className='contact' style={{ color: 'blue' }}>
                <List users={this.state.users} />
                <Form addcontent={this.addcontent} />

            </div>

        );
    }
}

export default Content;