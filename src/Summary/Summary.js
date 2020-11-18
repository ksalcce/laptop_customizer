import React, { Component } from 'react';
import Parts from '../Parts/Parts.js'

class Summary extends Component {
    render() {
        return (
            <div>
                <h3>NEW GREENLEAF 2018</h3>
                <Parts selected={this.props.selected} />
            </div>
        )
    }
}

export default Summary;