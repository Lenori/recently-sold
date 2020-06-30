import React, {Component} from 'react';
import Select from 'react-select'
import Slider from 'react-rangeslider'
import CurrencyInput from 'react-currency-input';
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
            results: [],
            summary: [],
            graphs: [],
            address: null,
            addressOptions: [
              { value: 'new-york', label: 'New York' },
              { value: 'chicago', label: 'Chicago' },
              { value: 'los-angeles', label: 'Los Angeles' }
            ],
            radius: null,
            soldDateMin: new Date(),
            soldDateMax: new Date(),
            priceMin: 0,
            priceMax: 0,
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
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 2,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 3,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 4,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 5,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 6,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 7,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 8,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 9,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 10,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 11,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
            sqfeet: 200
            },
            {
            id: 12,
            img: 'img_url',
            title: '555 Stanley Ave',
            city: 'New York, NY',
            zip: '238948',
            price: '200.000',
            sold_date: '12/12/2019',
            bedrooms: 3,
            bathrooms: 2,
            lotsize: 500,
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
            graphs: graphs
        })
    }

    componentDidMount() {
        this.search();
    }
    
    render() {
        return(
            <>
            <Content>
                <Header alwaysWhite={true} />
                {!this.state.showResults &&
                    <>
                    <Half fixed>
                        <SelectInput>
                            <Select
                                options={this.state.addressOptions}
                                styles={selectStyles}
                                className='select-input'
                                placeholder='Enter address keyword (E.G. New York)'
                                onChange={(e) => this.setState({address: e})}
                            />
                        </SelectInput>
                        <Range>
                            <p>Radius from {this.state.address ? this.state.address.label : 'this address'}: </p>
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
                            <CurrencyInput prefix="$" value={this.state.priceMin} onChangeEvent={(e, maskedvalue, floatValue) => this.setState({priceMin: maskedvalue})}/>
                            <p>and </p>
                            <CurrencyInput prefix="$" value={this.state.priceMax} onChangeEvent={(e, maskedvalue, floatValue) => this.setState({priceMax: maskedvalue})}/>
                        </Range>
                        <Range>
                            <p>Bedrooms between </p>
                            <section>
                                <Slider
                                    min={1}
                                    max={5}
                                    value={this.state.bedroomsMin}
                                    handleLabel={this.state.bedroomsMin ? `${this.state.bedroomsMin.toString()}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({bedroomsMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={1}
                                    max={5}
                                    value={this.state.bedroomsMax}
                                    handleLabel={this.state.bedroomsMax ? `${this.state.bedroomsMax.toString()}${this.state.bedroomsMax == 5 ? '+' : ''}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({bedroomsMax: e})}
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
                                    handleLabel={this.state.bathroomsMin ? `${this.state.bathroomsMin.toString()}` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({bathroomsMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={1}
                                    max={5}
                                    value={this.state.bathroomsMax}
                                    handleLabel={this.state.bathroomsMax ? `${this.state.bathroomsMax.toString()}${this.state.bathroomsMax == 5 ? '+' : ''}` : ''}
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
                                    handleLabel={this.state.sqfeetMin ? `${this.state.sqfeetMin.toString()}ft²` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({sqfeetMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={20}
                                    max={100}                            
                                    step={10}
                                    value={this.state.sqfeetMax}
                                    handleLabel={this.state.sqfeetMax ? `${this.state.sqfeetMax.toString()}${this.state.sqfeetMax == 100 ? '+' : ''} ft²` : ''}
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
                                    handleLabel={this.state.lotMin ? `${this.state.lotMin.toString()} acres` : ''}
                                    tooltip={false}
                                    onChange={(e) => this.setState({lotMin: e})}
                                />
                                <p>and </p>
                                <Slider
                                    min={50}
                                    max={500}                            
                                    step={50}
                                    value={this.state.lotMax}
                                    handleLabel={this.state.lotMax ? `${this.state.lotMax.toString()}${this.state.lotMax == 500 ? '+' : ''} acres` : ''}
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
                                    handleLabel={this.state.yearMax ? `${this.state.yearMax.toString()}${this.state.yearMax == 2020 ? '+' : ''}` : ''}
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
            </Content>            
            <Results
              results={this.state.results}
              totalItems={120}
              summary={this.state.summary}
              graphs={this.state.graphs}
              images={this.state.showPictures}
            />
            </>
        )
    }
}

export default Search;