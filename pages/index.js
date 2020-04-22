import React from 'react';
import SearchBars from "../components/SearchBars";
import HeaderBar from "../components/nav/HeaderBar";
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3b5998'
        },
        secondary: {
            main: '#ffffff',
        },
        alternateTextColor: '#ffffff'
    },
});

export default function Index() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <HeaderBar/>
                <div>
                    <h1>Fakeblock: a Facebook Frontend Alternative</h1>
                </div>
                <SearchBars/>
            </div>
        </ThemeProvider>
    )
}