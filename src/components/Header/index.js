import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {FaBars, FaTimes} from 'react-icons/fa';

import logo from '../../assets/logo.png';
import diamond from '../../assets/diamond.svg';

import {Head, Logo, Content, Item, MenuIcon} from './styles';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            show: false
        }
    }
    render() {
        return(
            <Head> 
                <Link className='home-link' to='/'><Logo hide={this.props.hideLogo ? true : false} src={logo} alt='Recently Sold' /></Link> 
                <MenuIcon alwaysWhite={this.props.alwaysWhite ? this.props.alwaysWhite : false}>
                    <FaBars onClick={() => this.setState({show: true})} />
                </MenuIcon>
                <Content show={this.state.show}>
                    <FaTimes onClick={() => this.setState({show: false})} />
                    <Link to='/'><Item hide={this.props.hideLogo ? false : true}>home</Item></Link>
                    <Link to='/finds'><Item>Finds</Item></Link>
                    <Link to='/summary'><Item>Summary</Item></Link>
                    <Link to='/market'><Item>Market</Item></Link>
                    <Link to='/developers'><Item>Developers</Item></Link>
                    <Link to='/membership'><Item button><img src={diamond} alt="diamond" /> Membership</Item></Link>
                    <Link to='/login'><Item button>Login</Item></Link>
                </Content>
            </Head>
        )
    }
}

export default Header;