import React, { Component } from 'react'

class List extends Component {
    state = {
        filterText: ''
    }

    onChangeFilterText =(e)=>{
        console.log(e.target.value);
        this.setState({
            filterText:e.target.value
        })
    }
    
    render() {

        const filterTextname = this.props.users.filter(
        user => {
                return user.name.toLowerCase().indexOf(this.state.filterText.toLocaleLowerCase()) !==-1
            }
        )

        return (

            <div className='list'>


                <input style={{textAlign:'center'
             }}

                    type="text"
                    name='name'
                    value={this.state.filterText}
                    placeholder="Izlash uchun ism kiriting"
                    onChange={this.onChangeFilterText}
                />


                {console.log(this.props.users)}

                <ul>

                    {
                        filterTextname.map((user) => {
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