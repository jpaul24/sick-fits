import React, { Component } from 'react';
import link from 'next/link';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
    background: red;
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <MyButton>Click me</MyButton>
                {this.props.children}
            </div>
        );
    }
}

export default Page;
