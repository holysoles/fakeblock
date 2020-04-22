import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import Link from "next/link";

const useStyles = makeStyles({
    list: {
        width: 200,
    },
    fullList: {
        width: 'auto',
    },
});

export default function DrawerMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'About'].map((text, index) => (
                    <Link href={text === 'Home' ? '/' : '/'+ text}>
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <HomeIcon/> : <InfoIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
                <Divider/>
            </List>
        </div>
    );
    const anchor = 'left';
    return (
        <div>
            <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton}
                            color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    )
}
