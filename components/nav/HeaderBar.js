import React from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useRouter} from "next/router";
import DrawerMenu from "./DrawerMenu";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3b5998'
        },
        secondary: {
            main: '#000000',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function handleFBRedirect (path) {
    const forbiddenRedirect = '/search/';
    if(!path.includes(forbiddenRedirect)){
        const url = 'https://www.facebook.com/' + path;
        window.open(url,"_self");
    }
    else{
        console.log("throw error!")
    }
}

export default function HeaderBar() {
    const classes = useStyles();
    const router = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar>
                        <DrawerMenu/>
                        <Typography variant="h5" className={classes.title}>
                            Fakeblock
                        </Typography>
                        <Button onClick={()=>{handleFBRedirect(router.asPath)}} color="inherit">Open on FB</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    );
}