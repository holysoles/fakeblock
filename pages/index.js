import React from 'react';
import SearchBars from "../components/SearchBars";
import HeaderBar from "../components/nav/HeaderBar";


export default function Index() {
    return (
        <div>
            <HeaderBar/>
            <div>
                <h1>Fakeblock: a Facebook Frontend Alternative</h1>
            </div>
            <SearchBars/>
        </div>
    );
}