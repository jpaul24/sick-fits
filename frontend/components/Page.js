import React, { Component } from 'react';
import link from 'next/link';
import Header from './Header';
import Meta from './Meta';



class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default Page;
