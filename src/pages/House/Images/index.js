import React, {Component} from 'react';

import house from '../../../assets/house.jpg';

import {Content, Img} from './styles';

class Images extends Component {
    constructor() {
        super();

        this.state = {
            active: 0
        }
    }

    render() {
        return(
            <Content>
                {this.props.images.map((image, index) => (
                    <Img active={this.state.active === index ? true : false} key={index} src={house} alt={`house-img-${index}`} />
                ))}
            </Content>
        )
    }
}

export default Images;