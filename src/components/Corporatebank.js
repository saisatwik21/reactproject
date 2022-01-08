import React, { Component } from 'react'

export default class Corporatebank extends Component {
    render(props) {
        return (
            <div>
                <h1>The main branch of corporate bank is located{this.props.location}</h1>
            </div>
        )
    }
}
