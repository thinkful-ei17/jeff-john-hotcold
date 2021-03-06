import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';


export default function Header(props) {
    if (props.showModal) {
        return (
        <InfoModal normalStateClick={() => props.normalStateClick()}/>
        )
    }
    return (
        <header>
            <TopNav Restart={() => props.Restart()} instructionClick={() => props.instructionClick()}/>
            <h1>HOT or COLD</h1>
        </header>
    );
};
