import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import house from '../../../assets/house.jpg';

import {Content, Actions, Items, Item, Pages, Export} from './styles';

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
                        
                    <Actions>
                        <section>
                            <Pages active>1</Pages>
                            <Pages>2</Pages>
                            <Pages>3</Pages>
                            <Pages>4</Pages>
                            <Pages>5</Pages>
                        </section>
                        <section>
                            <button onClick={() => this.props.editSearch()}>Edit search</button>
                            <button>Share search</button>
                            <button>Save search</button>
                        </section>
                    </Actions>

                    <Summary summary={this.props.summary} />
                    <Graphs graphs={this.props.graphs} />

                    <Export>
                        <button>Export data</button>
                    </Export>
                </Content>
        )
    }
}

export default Results;