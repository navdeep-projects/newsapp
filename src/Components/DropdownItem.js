import React, { Component } from 'react'

export default class DropdownItem extends Component {
    render() {
        return (
            <div>
                <a className="dropdown-item active" href="/">India</a>
                <a className="dropdown-item" href="/">United States</a>
            </div>
        )
    }
}
