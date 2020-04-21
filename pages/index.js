import React from 'react';
import Link from 'next/link';
import SearchBars from "../components/SearchBars";
import HeaderBar from "../components/HeaderBar";


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