import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import Highlight from '../../components/Highlight';

import {Content, Half, Title, Description, Input, Actions} from './styles';

class Signin extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return(
            <Content>
                <Header />
                <Half fixed>
                    <Title>
                        <h1>Real Estate</h1>
                        <p>data search tool</p>
                    </Title>

                    <Description>
                        <p>Lorem ipsum <span>dolor</span> sit amet, consectetur adipiscing elit. Integer <span>mattis massa</span> sit amet nisl rhoncus, at sodales dolor fringilla. Etiam pretium leo non arcu molestie, quis maximus urna varius. Donec viverra justo volutpat lacus ornare <span>lacinia</span>. Suspendisse eros libero, eleifend et mi vitae.</p>
                    </Description>
                </Half>

                <Half>
                    <Input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="text" placeholder="E-mail" />
                    <Input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type="password" placeholder="Password" />

                    <Actions>
                        <Link to='/register'><p>Don’t have an account? Create one!</p></Link>
                        <button>Login</button>
                    </Actions>
                </Half>            
            
                <Highlight />
            </Content>
        )
    }
}

export default Signin;