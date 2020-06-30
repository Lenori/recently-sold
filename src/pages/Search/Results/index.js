import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import house from '../../../assets/house.jpg';

import {Content, Actions, Items, Item, ItemsNoIMG, ItemNoIMG, Pages, Export} from './styles';

import Graphs from '../../../components/Graphs';
import Summary from '../../../components/Summary';

class Results extends Component {
    constructor() {
        super();

        this.state = {          
        }
    }
    
    render() {
        return(
                <Content>
                    <h1>Search results</h1>
                    <p>Showing 1 to 10 of 100 enteries (filtered from {this.props.totalItems})</p>                

                    <Export>
                        <button>Export data</button>
                    </Export>   

                    {this.props.images &&
                        <Items>
                            {this.props.results.map(result => (
                                <Link to={`house/${result.id}`}>
                                    <Item key={result.id}>
                                        <img src={house} alt="result-img" />
                                        <div>
                                            <section>
                                                <h1>{result.title}</h1>
                                                <p>{result.city}</p>
                                            </section>
                                            <section>
                                                <p>Sold for <span>${result.price}</span> on <span>{result.sold_date}</span></p>
                                            </section>
                                            <section>
                                                <p><span>{result.bedrooms} bedrooms</span>, <span>{result.bathrooms} bathrooms</span> and <span>{result.sqfeet} ft²</span>.</p>
                                            </section>
                                        </div>
                                    </Item>
                                </Link>
                            ))}
                        </Items>                       
                    }

                    {!this.props.images &&
                        <table>
                            <tr>
                            <th>Address</th>
                            <th>Home size (SF)</th>
                            <th>Lot size</th>
                            <th>Sale price</th>
                            <th>Sale date</th>
                            <th>Details</th>
                            </tr>

                            {this.props.results.map(result =>(
                                <tr>
                                    <td>{`${result.title}, ${result.city}, ${result.zip}`}</td>
                                    <td>{`${result.sqfeet}ft²`}</td>
                                    <td>{`${result.lotsize} acres`}</td>
                                    <td>{`$${result.price}`}</td>
                                    <td>{result.sold_date}</td>
                                    <td><Link to={`house/${result.id}`}>View</Link></td>
                                </tr>
                            ))}

                        </table>                      
                    }                    
                        
                    <Actions>
                        <section>
                            <Pages active>1</Pages>
                            <Pages>2</Pages>
                            <Pages>3</Pages>
                            <Pages>4</Pages>
                            <Pages>5</Pages>
                        </section>
                        <section>
                            <button>Share search</button>
                            <button>Save search</button>
                        </section>
                    </Actions>

                    <Summary summary={this.props.summary} />
                    <Graphs graphs={this.props.graphs} />
                </Content>
        )
    }
}

export default Results;