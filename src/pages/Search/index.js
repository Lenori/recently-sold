import React, {Component} from 'react';
import Select from 'react-select'
import Slider from 'react-rangeslider'
import DatePicker from 'react-datepicker';
import 'react-rangeslider/lib/index.css'
import 'react-datepicker/dist/react-datepicker.css';
import selectStyles from './selectStyles';

import Header from '../../components/Header';
import Results from './Results';

import {Content, Half, Input, Actions, DateInput, Range, SelectInput, Checkbox} from './styles';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            showResults: false,
            results: [],
            summary: [],
            graphs: [],
            address: '',
            radius: null,
            soldDateMin: new Date(),
            soldDateMax: new Date(),
            priceMin: null,
            priceMax: null,
            bedroomsMin: null,
            bedroomsMax: null,
            bathroomsMin: null,
            bathroomsMax: null,
            sqfeetMin: null,
            sqfeetMax: null,
            lotMin: null,
            lotMax: null,
            yearMin: null,
            yearMax: null,
            brokerage: '',
            showPictures: false,
            propertyType: null,
            propertyTypes: [
                { value: 'apartment', label: 'Apartment' },
                { value: 'house', label: 'House' },
                { value: 'studio', label: 'Studio' }
              ],
            venue: null,
            venues: [
                { value: 'venue1', label: 'Venue 1' },
                { value: 'venue2', label: 'Venue 2' },
                { value: 'venue3', label: 'Venue 3' }
            ]
        }

        this.search = this.search.bind(this);
    }

    search() {
        const results = [
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
            },
            {
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
            id: 10,
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
            id: 11,
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
            id: 12,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            sqfeet: 200
            }
        ];

        const summary = [
            {label: 'Total sales', value: '120'},
            {label: 'Dollar volume', value: '$1.200.000'},
            {label: 'Average price', value: '$350.000'},
            {label: 'Standard deviation', value: '375'},
            {label: 'Low price', value: '$120.000'},
            {label: 'High price', value: '$480.000'}
        ]

        const graphs = [
            [{
              "id": "Sales",
              "color": "hsl(189, 70%, 50%)",
              "data": [
                {
                  "x": "2009",
                  "y": 69
                },
                {
                  "x": "2010",
                  "y": 176
                },
                {
                  "x": "2011",
                  "y": 236
                },
                {
                  "x": "2012",
                  "y": 115
                },
                {
                  "x": "2013",
                  "y": 202
                },
                {
                  "x": "2014",
                  "y": 237
                },
                {
                  "x": "2015",
                  "y": 135
                },
                {
                  "x": "2016",
                  "y": 205
                },
                {
                  "x": "2017",
                  "y": 264
                },
                {
                  "x": "2018",
                  "y": 87
                },
                {
                  "x": "2019",
                  "y": 144
                },
                {
                  "x": "2020",
                  "y": 203
                }
              ]
            }],
            [{
                "id": "Average price",
                "color": "hsl(189, 70%, 50%)",
                "data": [
                  {
                    "x": "2009",
                    "y": 125000
                  },
                  {
                    "x": "2010",
                    "y": 135000
                  },
                  {
                    "x": "2011",
                    "y": 170000
                  },
                  {
                    "x": "2012",
                    "y": 230000
                  },
                  {
                    "x": "2013",
                    "y": 200000
                  },
                  {
                    "x": "2014",
                    "y": 250000
                  },
                  {
                    "x": "2015",
                    "y": 200000
                  },
                  {
                    "x": "2016",
                    "y": 190000
                  },
                  {
                    "x": "2017",
                    "y": 180000
                  },
                  {
                    "x": "2018",
                    "y": 230000
                  },
                  {
                    "x": "2019",
                    "y": 280000
                  },
                  {
                    "x": "2020",
                    "y": 250000
                  }
                ]
              }]
        ]

        this.setState({
            results: results,
            summary: summary,
            graphs: graphs,
            showResults: true
        })
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search); 

        if (params.get('results')) {
            this.search();
            this.setState({showResults: true});
        }
    }
    
    render() {
        return(
            <Content>
                <Header alwaysWhite={true} />
                {!this.state.showResults &&
                    <>
                    <Half fixed>
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
                        <DateInput>
                            <p>Sold date between </p>
                            <DatePicker
                                selected={this.state.soldDateMin}
                                onChange={date => this.setState({soldDateMin: date})}
                                className="date-input"
                            />
                            <p>and </p>
                            <DatePicker
                                selected={this.state.soldDateMax}
                                onChange={date => this.setState({soldDateMax: date})}
                                className="date-input"
                            />
                        </DateInput>
                        <Range>
                            <p>Sold price between </p>
                            <section>
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
                            </section>
                        </Range>
                        <Range>
                            <p>Bedrooms between </p>
                            <section>
                                <Slider
                                    min={1}
                                    max={5}
                                    value={this.state.bedroomsMin}
                                    handleLabel={this.state.bedroomsMin ? `${this.state.bedroomsMin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({bedroomsMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={1}
                                    max={5}
                                    value={this.state.badroomsMax}
                                    handleLabel={this.state.badroomsMax ? `${this.state.badroomsMax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({badroomsMax: e})}
                                />
                            </section>
                        </Range>
                        <Range>
                            <p>Bathrooms between </p>
                            <section>
                                <Slider
                                    min={1}
                                    max={5}
                                    value={this.state.bathroomsMin}
                                    handleLabel={this.state.bathroomsMin ? `${this.state.bathroomsMin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({bathroomsMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={1}
                                    max={5}
                                    value={this.state.bathroomsMax}
                                    handleLabel={this.state.bathroomsMax ? `${this.state.bathroomsMax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({bathroomsMax: e})}
                                />
                            </section>
                        </Range>
                        <Range>
                            <p>Square feet between </p>
                            <section>
                                <Slider
                                    min={20}
                                    max={100}
                                    step={10}
                                    value={this.state.sqfeetMin}
                                    handleLabel={this.state.sqfeetMin ? `${this.state.sqfeetMin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}ft²` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({sqfeetMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={20}
                                    max={100}                            
                                    step={10}
                                    value={this.state.sqfeetMax}
                                    handleLabel={this.state.sqfeetMax ? `${this.state.sqfeetMax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}ft²` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({sqfeetMax: e})}
                                />
                            </section>
                        </Range>
                        <Range>
                            <p>Lot size between </p>
                            <section>
                                <Slider
                                    min={50}
                                    max={500}
                                    step={50}
                                    value={this.state.lotMin}
                                    handleLabel={this.state.lotMin ? `${this.state.lotMin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}ft²` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({lotMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={50}
                                    max={500}                            
                                    step={50}
                                    value={this.state.lotMax}
                                    handleLabel={this.state.lotMax ? `${this.state.lotMax.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}ft²` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({lotMax: e})}
                                />
                            </section>
                        </Range>
                        <Range>
                            <p>Year built between </p>
                            <section>
                                <Slider
                                    min={1900}
                                    max={2020}
                                    step={10}
                                    value={this.state.yearMin}
                                    handleLabel={this.state.yearMin ? `${this.state.yearMin.toString()}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({yearMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={1900}
                                    max={2020}                            
                                    step={10}
                                    value={this.state.yearMax}
                                    handleLabel={this.state.yearMax ? `${this.state.yearMax.toString()}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({yearMax: e})}
                                />
                            </section>
                        </Range>
                    </Half>

                    <Half>
                        <Input value={this.state.brokerage} onChange={(e) => this.setState({brokerage: e.target.value})} type="text" placeholder="Enter brokerage company or agent" />
                        <SelectInput>
                            <Select
                                options={this.state.propertyTypes}
                                styles={selectStyles}
                                isMulti
                                className='select-input'
                                placeholder='Select a property type'
                                onChange={(e) => this.setState({propertyType: e})}
                            />
                        </SelectInput>
                        <SelectInput>
                            <Select
                                options={this.state.venues}
                                styles={selectStyles}
                                isMulti
                                className='select-input'
                                placeholder='Select a venue'
                                onChange={(e) => this.setState({venue: e})}
                            />
                        </SelectInput>                    
                        <Checkbox>
                            <input onClick={() => this.setState({showPictures: !this.state.showPictures})} type='checkbox' />
                            <span></span>
                            <p>Show results with pictures</p>
                        </Checkbox>
                        <Actions>
                            <button onClick={() => this.search()}>Search</button>
                        </Actions>          
                    </Half>
                    </>
                }
                {this.state.showResults &&
                    <Results
                        results={this.state.results}
                        summary={this.state.summary}
                        graphs={this.state.graphs}
                        editSearch={() => this.setState({showResults: false})}
                    />
                }
            </Content>
        )
    }
}

export default Search;