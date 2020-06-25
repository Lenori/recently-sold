import React, {Component} from 'react';

import {Content} from './styles';

class Summary extends Component {

    render() {
        return(
            <Content>
                <h1>Summary</h1>
                <div>
                    {this.props.summary.map((item, index) => (
                        <p key={index}><span>{item.label}:</span> {item.value}</p>
                    ))}
                </div>
            </Content>
        )
    }
}

export default Summary;