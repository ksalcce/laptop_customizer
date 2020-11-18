import React, { Component } from 'react';

class Parts extends Component {
    render() {
        const selected = this.props.selected
        return (
            Object.keys(selected)
            .map(key => <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{this.props.selected[key].name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.selected[key].cost) }
                </div>
            </div>
            )
        )
    }
}

export default Parts;