import React, {Component} from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import Header from '../../components/Header';

import {Content, Half, Input, Actions, Range} from './styles';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            address: '',
            radius: null,
            priceMin: null,
            priceMax: null
        }
    }

    handleChangeStart = () => {
        console.log('Change event started')
      };
    
      handleChangeComplete = () => {
        console.log('Change event completed')
      };
    
    render() {
        return(
            <Content>
                <Header />
                <Half>
                    <Input value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} type="text" placeholder="Enter address keyword (E.G. New York)" />
                    <Range>
                        <p>Radius from {this.state.address ? this.state.address : 'this address'}: </p>
                        <Slider
                            min={0}
                            max={100}
                            value={this.state.radius}
                            handleLabel={this.state.radius ? `${this.state.radius.toString()} miles` : ''}
                            tooltip={false}
                            onChange={(e) => this.setState({radius: e})}
                        />
                    </Range>
                    <Range>
                        <p>Sold price between </p>
                        <Slider
                            min={10000}
                            max={1000000}
                            step={10000}
                            value={this.state.priceMin}
                            handleLabel={this.state.priceMin ? `$${this.state.priceMin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` : ''}
                            tooltip={false}
                            onChange={(e) => this.setState({priceMin: e})}
                        />
                        <p>and </p>
                        <Slider
                            min={10000}
                            max={1000000}
                            step={10000}
                            value={this.state.priceMax}
                            handleLabel={this.state.priceMax ? `$${this.state.priceMax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` : ''}
                            tooltip={false}
                            onChange={(e) => this.setState({priceMax: e})}
                        />
                    </Range>
                </Half>

                <Half>
                    <Actions>
                        <button>Search</button>
                    </Actions>          
                </Half>
            </Content>
        )
    }
}

export default Search;