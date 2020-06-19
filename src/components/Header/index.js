import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import diamond from '../../assets/diamond.svg';

import {Content, Item} from './styles';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    }
    render() {
        return(
            <Content show={this.state.show}>
                <Link to='/'><Item>Home</Item></Link>
                <Link to='/finds'><Item>Finds</Item></Link>
                <Link to='/summary'><Item>Summary</Item></Link>
                <Link to='/market'><Item>Market</Item></Link>
                <Link to='/developers'><Item>Developers</Item></Link>
                <Link to='/membership'><Item button><img src={diamond} alt="diamond" /> Membership</Item></Link>
                <Link to='/login'><Item button>Login</Item></Link>
            </Content>
        )
    }
}

export default Header;