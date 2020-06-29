import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Highlight from '../../components/Highlight';

import Images from './Images';
import Location from './Location';
import History from './History';
import Similar from './Similar';

import {Content, Half, Title, Description, Menu, Item, Actions} from './styles';

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Home extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            house: [],
            active: 1
        }

        this.house = this.house.bind(this);
    }

    house() {
        const house = {
                id: 1,
                images: ['img_url', 'img_url', 'img_url', 'img_url'],
                type: 'House',
                title: '555 Stanley Ave',
                city: 'New York, NY',
                price: '200.000',
                sold_date: '12/12/2019',
                bedrooms: 3,
                bathrooms: 2,
                sqfeet: 200,
                lotSize: 500,
                year: 1995,
                broker: 'Broker name',
                history: [
                    {date: '12/12/2019', event: 'Sold', agent: 'Broker Name', price: '200.000'},
                    {date: '10/22/2019', event: 'Listed', agent: 'Broker Name', price: '225.000'},
                    {date: '05/02/2002', event: 'Sold', agent: 'Broker Name', price: '150.000'},
                    {date: '09/12/2001', event: 'Built'}
                ],
                similar: [
                    {
                    id: 1,
                    img: 'img_url',
                    title: '555 Stanley Ave',
                    city: 'New York, NY',
                    price: '200.000',
                    sold_date: '12/12/2019',
                    bedrooms: 3,
                    bathrooms: 2,
                    sqfeet: 200
                    },
                    {
                    id: 2,
                    img: 'img_url',
                    title: '555 Stanley Ave',
                    city: 'New York, NY',
                    price: '200.000',
                    sold_date: '12/12/2019',
                    bedrooms: 3,
                    bathrooms: 2,
                    sqfeet: 200
                    },
                    {
                    id: 3,
                    img: 'img_url',
                    title: '555 Stanley Ave',
                    city: 'New York, NY',
                    price: '200.000',
                    sold_date: '12/12/2019',
                    bedrooms: 3,
                    bathrooms: 2,
                    sqfeet: 200
                    },
                    {
                    id: 4,
                    img: 'img_url',
                    title: '555 Stanley Ave',
                    city: 'New York, NY',
                    price: '200.000',
                    sold_date: '12/12/2019',
                    bedrooms: 3,
                    bathrooms: 2,
                    sqfeet: 200
                    }                    
                ]
            }

        this.setState({house: house, active: 1, loading: false})
    }

    componentDidMount() {
        this.house();
    }

    render() {
        return(
            <Content>
                {this.state.loading &&
                    <Loader
                        type="Puff"
                        color="white"
                        height={100}
                        width={100}          
                    />
                }

                {!this.state.loading &&
                    <>
                    <Half fixed>
                        <Title>
                            <h1>{this.state.house.title}</h1>
                            <p>{this.state.house.city}</p>
                        </Title>
    
                        <Description>
                            <p><span>{this.state.house.type}</span> sold on <span>{this.state.house.sold_date}</span> for <span>${this.state.house.price}</span>.</p>
                        </Description>
    
                        <Description>
                            <p><span>Bedrooms: </span>{this.state.house.bedrooms}</p>
                            <p><span>Bathrooms: </span>{this.state.house.bathrooms}</p>
                            <p><span>Square feet: </span>{this.state.house.sqfeet} ft²</p>
                            <p><span>Lot size: </span>{this.state.house.lotsize} ft2</p>
                            <p><span>Year built: </span>{this.state.house.year}</p>
                            <p><span>Broker: </span>{this.state.house.broker}</p>
                        </Description>
                    </Half>
    
                    <Half>
                        <Menu>
                            <Item active={this.state.active === 1 ? true : false} onClick={() => this.setState({active: 1})}>Images</Item>
                            <Item active={this.state.active === 2 ? true : false} onClick={() => this.setState({active: 2})}>Location</Item>
                            <Item active={this.state.active === 3 ? true : false} onClick={() => this.setState({active: 3})}>History</Item>
                            <Item active={this.state.active === 4 ? true : false} onClick={() => this.setState({active: 4})}>Similar</Item>
                        </Menu>
    
                        {this.state.active === 1 &&
                            <Images images={this.state.house.images} />
                        }

                        {this.state.active === 2 &&
                            <Location address={`${this.state.house.title} ${this.state.house.city}`} />
                        }

                        {this.state.active === 3 &&
                            <History history={this.state.house.history} />
                        }

                        {this.state.active === 4 &&
                            <Similar similar={this.state.house.similar} />
                        }
    
                        <Actions>
                            <Link to='/search'><button>Back to results</button></Link>
                        </Actions>
                    </Half>            
                
                    <Highlight />
                    </>
                }
            </Content>
        )
    }
}

export default Home;