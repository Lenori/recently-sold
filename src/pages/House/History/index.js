import React, {Component} from 'react';

import {Content, Item} from './styles';

class History extends Component {

    render() {
        return(
            <Content>
                {this.props.history.map(history => (
                    history.event === 'Built'
                        ? 

                            <Item>
                                <p><span>{history.date}</span> | <span>{history.event}</span></p>
                            </Item>

                        :

                            <Item>
                                <p><span>{history.date}</span> | <span>{history.event}</span> by <span>{history.agent}</span> {history.event === 'Sold' ? 'for' : 'asking'} $<span>{history.price}</span></p>  
                            </Item>
                                                             
                    ))}
            </Content>
        )
    }
}

export default History;