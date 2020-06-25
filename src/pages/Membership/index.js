import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import search from '../../assets/search.svg';
import data from '../../assets/data.svg';
import membership from '../../assets/membership.svg';
import api from '../../assets/api.svg';

import Header from '../../components/Header';
import Highlight from '../../components/Highlight';

import {Content, Items, Item, Recommended} from './styles';

class Home extends Component {
    render() {
        return(
            <Content>
                <Header alwaysWhite />
                <Items>
                    <Item>
                        <h1>Free plan</h1>

                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>

                        <button>Sign up</button>
                    </Item>

                    <Item>
                        <Recommended>Recommended</Recommended>

                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>

                        <button>Sign up</button>
                    </Item>

                    <Item>
                        <h1>Professional plan</h1>

                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>

                        <button>Sign up</button>
                    </Item>
                </Items>
            </Content>
        )
    }
}

export default Home;