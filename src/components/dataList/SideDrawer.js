import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import EnvironmentSelect from './EnvironmentSelect';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: ''
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));
export default function SideDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        currentDb: "",
        showEnvironmentList: false
    });

    const handleDatabase = e => {
        const current = e.currentTarget.id;
        setState({ ...state, currentDb: current, showEnvironmentList: true });
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Data Management Dashboard
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {['EPDx', 'NMAx', 'IFNMAx'].map((text) => (
                        <ListItem button id={text} key={text} onClick={handleDatabase}>
                            <ListItemIcon>
                                <AllInboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {state.showEnvironmentList ?
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <EnvironmentSelect data={state.currentDb} />
                </main>
                : ""}
        </div>
    );
}