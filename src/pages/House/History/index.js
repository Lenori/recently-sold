import React, {Component} from 'react';

import {Content} from './styles';

class History extends Component {

    render() {
        return(
            <Content>
                {this.props.history.map(history => (
                    history.event == 'Built'
                        ? 
                        <p>
                            <span>{history.date}</span>|
                            <span>{history.event}</span>
                        </p>
                        :
                        <p>
                            <span>{history.date}</span>|
                            <span>{history.event}</span>
                            by<span>Broker Name</span>
                            {history.event === 'Sold' ? 'for' : 'asking'}<span>${history.price}.</span>
                        </p>  
                                                             
                    ))}
            </Content>
        )
    }
}

export default History;