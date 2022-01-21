import React, { Component } from 'react';
import DropdownItem from './DropdownItem';

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Country
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <DropdownItem/>
                        </div>
                    </div>
            </div>
        )
    }
}
