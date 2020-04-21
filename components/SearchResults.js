import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
    const classes = useStyles();

    const resultsList = props.results.map((result) => {
        return(
            <div>
                <ListItemLink key={result.link} href={result.link}>
                    <ListItemText primary={result.title} />
                </ListItemLink>
                <Divider />
            </div>
        )
    });

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="search results">
                {resultsList}
            </List>
        </div>
    );
}