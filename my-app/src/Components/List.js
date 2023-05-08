import React, { Component } from 'react'

class List extends Component {
    render() {

        return (

            <div className='list'>

                {console.log(this.props.users)}

                <ul>

                    {
                        this.props.users.map((user) => {
                            return (
                                <li key={user.phone}>
                                    <span className='name'>{user.name}</span>

                                    <span className='phone'>{user.phone}</span>
                                </li>
                            )
                        })
                    }

                </ul>

            </div>

        );
    }
}

export default List;