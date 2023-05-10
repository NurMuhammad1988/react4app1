import React, { Component } from 'react'
 
class Form extends Component {

    constructor() {
        super();
        this.onChange2 = this.onChange2.bind(this);
        this.submit = this.submit.bind(this);
    }

    state = {
        name: '',
        phone: '+998 '
    }

    onChange2(e) {
        console.log('salom');
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        this.props.addcontent({...this.state})
        this.setState({
            name: "",
            phone: "+998 "
        })
    }

    render() {

        return (

            <div className='form'>
                <form action="" onSubmit={this.submit}>

                    <input

                        type="text"
                        name='name'
                        value={this.state.name}
                        placeholder="Ismingiz"
                        onChange={this.onChange2}
                    />

                    <input

                        type="text"
                        name='phone'
                        value={this.state.phone}
                        placeholder="Telefon raqamingiz"
                        onChange={this.onChange2}
                    />

                    <button className='btn_form'>Qo'shish</button>

                </form>
            </div>
        );

    }
}

export default Form;
