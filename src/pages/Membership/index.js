import React, {Component} from 'react';

import Header from '../../components/Header';

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