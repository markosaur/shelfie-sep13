import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                Header
                <Link to = '/'>
                    <button>Dashboard</button>
                </Link>
                <Link to = '/forms'>
                    <button>Add Inventory</button>
                </Link>
            </div>
        )
    }
}
